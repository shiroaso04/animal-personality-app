import { Animal, Question, TraitLevel, TraitMatch } from '../types';
import { traits } from '../data/traits';

/**
 * Calculate the information gain (narrowing score) for a question
 * @param question The question to evaluate
 * @param candidateAnimals Current candidate animals with their probabilities
 * @param animals All animals
 */
export const calculateNarrowingScore = (
  question: Question,
  candidateAnimals: Record<string, number>,
  animals: Animal[]
): number => {
  // Get the related trait
  const relatedTraitId = question.relatedTraitId;
  
  // Count how many animals have each level of this trait
  const traitDistribution: Record<TraitLevel, number> = {
    'high': 0,
    'medium': 0,
    'low': 0,
    'none': 0
  };
  
  // Count animals with each trait level, weighted by their current probability
  Object.entries(candidateAnimals).forEach(([animalId, probability]) => {
    const animal = animals.find(a => a.id === animalId);
    if (animal) {
      const trait = animal.traits[relatedTraitId];
      const traitLevel = trait ? trait.level : 'none';
      traitDistribution[traitLevel] += probability;
    }
  });
  
  // Calculate entropy before answering the question
  // Higher entropy means more uncertainty, more potential for narrowing
  let entropy = 0;
  Object.values(traitDistribution).forEach(count => {
    if (count > 0) {
      const proportion = count / Object.values(candidateAnimals).reduce((sum, prob) => sum + prob, 0);
      entropy -= proportion * Math.log2(proportion);
    }
  });
  
  // Return entropy as the narrowing score
  // Higher entropy means more potential for narrowing down
  return entropy * 10; // Scale for better comparison
};

/**
 * Calculate the correctness score for a question
 * @param question The question to evaluate
 * @param candidateAnimals Current candidate animals with their probabilities
 * @param animals All animals
 */
export const calculateCorrectnessScore = (
  question: Question,
  candidateAnimals: Record<string, number>,
  animals: Animal[]
): {
  correctnessScore: number;
  negationScore: number;
  matchScore: number;
  excludeScore: number;
} => {
  const relatedTraitId = question.relatedTraitId;
  const trait = traits.find(t => t.id === relatedTraitId);
  
  if (!trait) {
    return {
      correctnessScore: 0,
      negationScore: 0,
      matchScore: 0,
      excludeScore: 0
    };
  }
  
  // Calculate negation power - how well a "no" answer can eliminate candidates
  let negationScore = 0;
  
  // Calculate match score - how well a "yes" answer confirms important traits
  let matchScore = 0;
  
  // Calculate exclusion score - how well a "yes" answer can eliminate unlikely candidates
  let excludeScore = 0;
  
  // For each animal in candidates
  Object.entries(candidateAnimals).forEach(([animalId, probability]) => {
    const animal = animals.find(a => a.id === animalId);
    if (animal) {
      const animalTrait = animal.traits[relatedTraitId];
      const traitLevel = animalTrait ? animalTrait.level : 'none';
      
      // If trait is high, a "no" answer would strongly negate this animal
      if (traitLevel === 'high') {
        negationScore += probability * trait.importanceWeight * 0.3;
      }
      
      // If trait is important and high/medium, a "yes" answer would strongly confirm this animal
      if ((traitLevel === 'high' || traitLevel === 'medium') && trait.importanceWeight >= 7) {
        matchScore += probability * trait.importanceWeight * 0.3;
      }
      
      // If trait is low/none, a "yes" answer would strongly exclude this animal
      if (traitLevel === 'low' || traitLevel === 'none') {
        excludeScore += probability * trait.importanceWeight * 0.4;
      }
    }
  });
  
  // Calculate total correctness score
  const correctnessScore = negationScore + matchScore + excludeScore;
  
  return {
    correctnessScore,
    negationScore,
    matchScore,
    excludeScore
  };
};

/**
 * Update animal probabilities based on user's answer using Bayes' theorem
 * @param answer User's answer (true = yes, false = no)
 * @param question The question answered
 * @param candidateAnimals Current candidate animals with their probabilities
 * @param animals All animals
 */
export const updateProbabilities = (
  answer: boolean,
  question: Question,
  candidateAnimals: Record<string, number>,
  animals: Animal[]
): Record<string, number> => {
  const relatedTraitId = question.relatedTraitId;
  const updatedProbabilities: Record<string, number> = {};
  const trait = traits.find(t => t.id === relatedTraitId);
  
  if (!trait) return candidateAnimals;
  
  // Calculate likelihoods P(E|H) for each animal
  Object.entries(candidateAnimals).forEach(([animalId, priorProbability]) => {
    const animal = animals.find(a => a.id === animalId);
    if (!animal) return;
    
    const animalTrait = animal.traits[relatedTraitId];
    const traitLevel = animalTrait ? animalTrait.level : 'none';
    
    // Calculate likelihood based on trait level and answer
    let likelihood = 0;
    if (answer) { // Yes answer
      // Probability of saying 'yes' given each trait level
      switch (traitLevel) {
        case 'high': likelihood = 0.9; break;
        case 'medium': likelihood = 0.6; break;
        case 'low': likelihood = 0.3; break;
        case 'none': likelihood = 0.1; break;
        default: likelihood = 0.5;
      }
    } else { // No answer
      // Probability of saying 'no' given each trait level
      switch (traitLevel) {
        case 'high': likelihood = 0.1; break;
        case 'medium': likelihood = 0.4; break;
        case 'low': likelihood = 0.7; break;
        case 'none': likelihood = 0.9; break;
        default: likelihood = 0.5;
      }
    }
    
    // Weight likelihood by trait importance
    likelihood = likelihood * (0.5 + trait.importanceWeight / 20);
    
    // Update probability using Bayes' theorem
    updatedProbabilities[animalId] = priorProbability * likelihood;
  });
  
  // Normalize probabilities
  const totalProbability = Object.values(updatedProbabilities).reduce((sum, prob) => sum + prob, 0);
  
  if (totalProbability > 0) {
    Object.keys(updatedProbabilities).forEach(animalId => {
      updatedProbabilities[animalId] /= totalProbability;
    });
  }
  
  return updatedProbabilities;
};

/**
 * Select the best question to ask based on current state
 * @param questions Available questions
 * @param askedQuestions Questions already asked
 * @param candidateAnimals Current candidate animals with their probabilities
 * @param animals All animals
 * @param stage Current stage of the test (early/middle/late)
 */
export const selectBestQuestion = (
  questions: Question[],
  askedQuestions: string[],
  candidateAnimals: Record<string, number>,
  animals: Animal[],
  answeredCount: number
): Question => {
  // Filter out questions that have already been asked
  const remainingQuestions = questions.filter(q => !askedQuestions.includes(q.id));
  
  // Calculate scores for each question
  const scoredQuestions = remainingQuestions.map(question => {
    // Calculate narrowing score
    const narrowingScore = calculateNarrowingScore(question, candidateAnimals, animals);
    
    // Calculate correctness score
    const { 
      correctnessScore,
      negationScore,
      matchScore,
      excludeScore
    } = calculateCorrectnessScore(question, candidateAnimals, animals);
    
    // Adjust weights based on how many questions have been answered
    // Early: focus on narrowing, Later: focus on correctness
    const progress = Math.min(answeredCount / 10, 1); // Cap at 1 after 10 questions
    
    // Calculate weights alpha and beta based on progress
    const alpha = 1 - (progress * 0.7); // Starts at 1, goes down to 0.3
    const beta = 0.3 + (progress * 0.7); // Starts at 0.3, goes up to 1
    
    // Calculate total score
    const totalScore = (alpha * narrowingScore) + (beta * correctnessScore);
    
    return {
      ...question,
      narrowingScore,
      correctnessScore,
      negationScore,
      matchScore,
      excludeScore,
      totalScore
    };
  });
  
  // Sort questions by total score in descending order
  scoredQuestions.sort((a, b) => b.totalScore - a.totalScore);
  
  // Return the question with the highest score
  return scoredQuestions[0];
};

/**
 * Evaluate all candidate animals and find the best matches
 * @param candidateAnimals Current candidate animals with their probabilities
 * @param animals All animals
 * @param answers Current answers to questions
 * @param questions Available questions
 * @returns Array of animals ranked by match score
 */
export const evaluateCandidates = (
  candidateAnimals: Record<string, number>,
  animals: Animal[],
  answers: Record<string, boolean>,
  questions: Question[]
): {animal: Animal, score: number, traitMatches: TraitMatch[]}[] => {
  // Array to store scores
  const scores: {animal: Animal, score: number, traitMatches: TraitMatch[]}[] = [];
  
  // For each candidate, calculate a more comprehensive similarity score
  Object.entries(candidateAnimals).forEach(([animalId, probability]) => {
    const animal = animals.find(a => a.id === animalId);
    if (!animal) return;
    
    // Start with Bayesian probability
    let score = probability * 0.7; // 70% weight to Bayesian inference
    
    // Calculate trait matching score (30% weight)
    let traitMatchScore = 0;
    let totalWeight = 0;
    
    // Array to store trait matches
    const traitMatches: TraitMatch[] = [];
    
    // For each answer, check how well it matches the animal's trait
    Object.entries(answers).forEach(([questionId, answer]) => {
      // Find the question
      const question = questions.find(q => q.id === questionId);
      if (!question) return;
      
      // Get the related trait
      const relatedTraitId = question.relatedTraitId;
      const trait = traits.find(t => t.id === relatedTraitId);
      if (!trait) return;
      
      // Get the animal's trait level
      const animalTrait = animal.traits[relatedTraitId];
      const traitLevel = animalTrait ? animalTrait.level : 'none';
      
      // Calculate match score based on answer and trait level
      let match = 0;
      if (answer) { // User answered "yes"
        switch (traitLevel) {
          case 'high': match = 1.0; break;
          case 'medium': match = 0.7; break;
          case 'low': match = 0.3; break;
          case 'none': match = 0; break;
          default: match = 0.5;
        }
      } else { // User answered "no"
        switch (traitLevel) {
          case 'high': match = 0; break;
          case 'medium': match = 0.3; break;
          case 'low': match = 0.7; break;
          case 'none': match = 1.0; break;
          default: match = 0.5;
        }
      }
      
      // Weight match by trait importance
      traitMatchScore += match * trait.importanceWeight;
      totalWeight += trait.importanceWeight;
      
      // Add to trait matches
      traitMatches.push({
        trait: {
          id: trait.id,
          name: trait.name,
          description: trait.description
        },
        level: traitLevel,
        matchScore: match
      });
    });
    
    // Normalize trait match score
    if (totalWeight > 0) {
      traitMatchScore = traitMatchScore / totalWeight;
    }
    
    // Add trait match component to final score
    score += traitMatchScore * 0.3; // 30% weight to trait matching
    
    // Sort trait matches by match score (highest first)
    traitMatches.sort((a, b) => b.matchScore - a.matchScore);
    
    // Add to scores array
    scores.push({ animal, score, traitMatches });
  });
  
  // Sort by score in descending order
  scores.sort((a, b) => b.score - a.score);
  
  return scores;
};
