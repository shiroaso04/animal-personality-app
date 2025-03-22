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
  // 複数の特性に対する平均narrowingScoreを計算
  let totalNarrowingScore = 0;
  
  // 各関連特性について情報エントロピーを計算
  for (const traitRelation of question.relatedTraits) {
    const relatedTraitId = traitRelation.traitId;
    
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
    
    // 特性ごとの情報エントロピーに特性のnarrowingScoreで重み付け
    totalNarrowingScore += entropy * traitRelation.narrowingScore;
  }
  
  // 平均narrowingScoreを計算
  return (totalNarrowingScore / question.relatedTraits.length) * question.correctnessScore / 10;
};

/**
 * 質問に対するmatchScoreを計算する
 * @param question 評価する質問
 * @param answer ユーザーの回答（true = はい、false = いいえ）
 */
export const calculateMatchScore = (
  question: Question,
  answer: boolean
): number => {
  let totalMatchScore = 0;
  
  // 各関連特性について処理
  for (const traitRelation of question.relatedTraits) {
    const relatedTraitId = traitRelation.traitId;
    const trait = traits.find(t => t.id === relatedTraitId);
    
    if (!trait) continue;
    
    // 特性の重要度による重み付け
    const importanceWeight = trait.importanceWeight / 10;
    
    // 回答が肯定的（はい）か否定的（いいえ）かに基づいてスコアを調整
    const direction = answer ? 1 : -1;
    
    // 特性の関連度（matchScore）、精度（narrowingScore）、質問の信頼性（correctnessScore）による重み付け
    const weightedScore = direction * traitRelation.matchScore * traitRelation.narrowingScore * question.correctnessScore;
    
    // 重要度を考慮した最終スコア
    totalMatchScore += (weightedScore / 100) * importanceWeight;
  }
  
  return totalMatchScore;
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
  const updatedProbabilities: Record<string, number> = {};
  
  // 各動物について更新確率を計算
  Object.entries(candidateAnimals).forEach(([animalId, priorProbability]) => {
    const animal = animals.find(a => a.id === animalId);
    if (!animal) return;
    
    let totalLikelihood = 0;
    
    // 各関連特性について尤度を計算
    for (const traitRelation of question.relatedTraits) {
      const relatedTraitId = traitRelation.traitId;
      const trait = traits.find(t => t.id === relatedTraitId);
      
      if (!trait) continue;
      
      const animalTrait = animal.traits[relatedTraitId];
      const traitLevel = animalTrait ? animalTrait.level : 'none';
      
      // 特性レベルと回答に基づいて尤度を計算
      let likelihood = 0;
      
      // 正負のmatchScoreを考慮
      const isPositiveMatch = traitRelation.matchScore > 0;
      const matchStrength = Math.abs(traitRelation.matchScore) / 10;
      
      if (answer) { // はいの回答
        if (isPositiveMatch) {
          // 肯定的な関連がある特性の場合
          switch (traitLevel) {
            case 'high': likelihood = 0.9 * matchStrength; break;
            case 'medium': likelihood = 0.6 * matchStrength; break;
            case 'low': likelihood = 0.3 * matchStrength; break;
            case 'none': likelihood = 0.1 * matchStrength; break;
            default: likelihood = 0.5 * matchStrength;
          }
        } else {
          // 否定的な関連がある特性の場合（反転）
          switch (traitLevel) {
            case 'high': likelihood = 0.1 * matchStrength; break;
            case 'medium': likelihood = 0.4 * matchStrength; break;
            case 'low': likelihood = 0.7 * matchStrength; break;
            case 'none': likelihood = 0.9 * matchStrength; break;
            default: likelihood = 0.5 * matchStrength;
          }
        }
      } else { // いいえの回答
        if (isPositiveMatch) {
          // 肯定的な関連がある特性の場合（反転）
          switch (traitLevel) {
            case 'high': likelihood = 0.1 * matchStrength; break;
            case 'medium': likelihood = 0.4 * matchStrength; break;
            case 'low': likelihood = 0.7 * matchStrength; break;
            case 'none': likelihood = 0.9 * matchStrength; break;
            default: likelihood = 0.5 * matchStrength;
          }
        } else {
          // 否定的な関連がある特性の場合
          switch (traitLevel) {
            case 'high': likelihood = 0.9 * matchStrength; break;
            case 'medium': likelihood = 0.6 * matchStrength; break;
            case 'low': likelihood = 0.3 * matchStrength; break;
            case 'none': likelihood = 0.1 * matchStrength; break;
            default: likelihood = 0.5 * matchStrength;
          }
        }
      }
      
      // 特性の重要度による重み付け
      likelihood = likelihood * (0.5 + trait.importanceWeight / 20);
      
      // 特性の鮮明度（narrowingScore）と質問の信頼性（correctnessScore）による重み付け
      likelihood = likelihood * (traitRelation.narrowingScore / 10) * (question.correctnessScore / 10);
      
      totalLikelihood += likelihood;
    }
    
    // 平均尤度を計算
    const averageLikelihood = totalLikelihood / question.relatedTraits.length;
    
    // ベイズの定理を使用して確率を更新
    updatedProbabilities[animalId] = priorProbability * averageLikelihood;
  });
  
  // 確率を正規化
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
  stage: 'early' | 'middle' | 'late' = 'middle'
): Question | null => {
  // Filter out already asked questions
  const availableQuestions = questions.filter(q => !askedQuestions.includes(q.id));
  
  if (availableQuestions.length === 0) {
    return null;
  }
  
  // 既に質問された特性の数を計算
  const askedQuestionsObjects = questions.filter(q => askedQuestions.includes(q.id));
  const askedTraits = new Set<string>();
  const traitCoverage = new Map<string, number>(); // 各特性がいくつの質問でカバーされたか
  
  // すでに質問された特性とそのカバレッジを計算
  askedQuestionsObjects.forEach(q => {
    q.relatedTraits.forEach(relation => {
      askedTraits.add(relation.traitId);
      const currentCount = traitCoverage.get(relation.traitId) || 0;
      traitCoverage.set(relation.traitId, currentCount + 1);
    });
  });
  
  // 上位の候補動物とその確率
  const topCandidates = Object.entries(candidateAnimals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .reduce((obj, [id, prob]) => ({ ...obj, [id]: prob }), {});
  
  // Calculate scores for each question
  const questionScores = availableQuestions.map(question => {
    // Calculate narrowing score dynamically using top candidates
    const narrowingScore = calculateNarrowingScore(question, topCandidates, animals);
    
    // 特性のカバレッジを計算
    const coveredTraits = new Set<string>();
    const traitWeights = new Map<string, number>();
    
    question.relatedTraits.forEach(relation => {
      coveredTraits.add(relation.traitId);
      traitWeights.set(relation.traitId, relation.matchScore);
    });
    
    // 新しい特性をカバーする質問へのボーナス
    let newTraitBonus = 0;
    let traitRedundancyPenalty = 0;
    
    coveredTraits.forEach(traitId => {
      // 新しい特性に対するボーナス
      if (!askedTraits.has(traitId)) {
        // 重要度に応じてボーナスを増加
        const trait = traits.find(t => t.id === traitId);
        const importanceWeight = trait ? trait.importanceWeight / 5 : 1;
        newTraitBonus += 5 * importanceWeight;
      } else {
        // すでに評価済みの特性に対するペナルティ
        const coverage = traitCoverage.get(traitId) || 0;
        // すでに複数回評価された特性に対するペナルティ
        traitRedundancyPenalty += Math.min(5, coverage * 1.5);
      }
    });
    
    // 質問の難易度を考慮（複雑すぎる質問や曖昧な質問は後回し）
    const clarityBonus = question.correctnessScore / 5;
    
    // 関連特性の数に応じたボーナス (2-3の特性を評価する質問が最適)
    const optimalTraitsCount = Math.min(3, Math.max(0, 3 - Math.abs(question.relatedTraits.length - 2.5)));
    
    // 重要な特性への重み付けを考慮
    let traitImportanceScore = 0;
    question.relatedTraits.forEach(relation => {
      const trait = traits.find(t => t.id === relation.traitId);
      if (trait) {
        traitImportanceScore += trait.importanceWeight * (relation.matchScore / 10);
      }
    });
    
    // テストの段階に応じて最終スコアを計算
    let finalScore = 0;
    
    // Early stage: 多様な特性を評価することに重点
    if (stage === 'early') {
      finalScore = 0.3 * traitImportanceScore + 
                  0.2 * narrowingScore + 
                  0.1 * question.correctnessScore + 
                  newTraitBonus * 1.2 - 
                  traitRedundancyPenalty * 1.5 +
                  optimalTraitsCount * 2 +
                  clarityBonus;
    }
    // Middle stage: 候補を絞り込むことと新しい特性のバランス
    else if (stage === 'middle') {
      finalScore = 0.2 * traitImportanceScore + 
                  0.4 * narrowingScore + 
                  0.2 * question.correctnessScore + 
                  newTraitBonus - 
                  traitRedundancyPenalty +
                  optimalTraitsCount * 1.5 +
                  clarityBonus;
    }
    // Late stage: 高確率の候補をさらに絞り込むことに重点
    else if (stage === 'late') {
      finalScore = 0.1 * traitImportanceScore + 
                  0.5 * narrowingScore + 
                  0.3 * question.correctnessScore + 
                  newTraitBonus * 0.5 - 
                  traitRedundancyPenalty * 0.5 +
                  optimalTraitsCount +
                  clarityBonus * 1.5;
    }
    
    return { question, score: finalScore };
  });
  
  // Find the best question
  const bestQuestion = questionScores.reduce(
    (best, current) => (current.score > best.score ? current : best), 
    { question: availableQuestions[0], score: -Infinity }
  );
  
  return bestQuestion.question;
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
  // Create a map of trait scores for each animal
  const traitScores: Record<string, Record<string, number>> = {};
  const answeredQuestions = Object.keys(answers).map(id => 
    questions.find(q => q.id === id)
  ).filter((q): q is Question => q !== undefined);
  
  // Initialize trait scores for each animal
  animals.forEach(animal => {
    traitScores[animal.id] = {};
    
    // Initialize all traits to 0
    traits.forEach(trait => {
      traitScores[animal.id][trait.id] = 0;
    });
  });
  
  // Calculate trait scores based on answers
  answeredQuestions.forEach(question => {
    const answer = answers[question.id];
    
    // 各関連特性についてスコアを計算
    question.relatedTraits.forEach(traitRelation => {
      const traitId = traitRelation.traitId;
      
      // 回答に基づいてスコアを調整
      const direction = answer ? 1 : -1;
      
      // この特性に対する重み付けスコア（絶対値を小さく調整）
      const score = direction * traitRelation.matchScore * (question.correctnessScore / 20);
      
      // 各動物についてこの特性のスコアを更新
      animals.forEach(animal => {
        traitScores[animal.id][traitId] += score;
      });
    });
  });
  
  // Calculate final match scores for each animal
  const animalMatches = animals.map(animal => {
    let totalTraitScore = 0;
    let totalPossibleScore = 0;
    const traitMatches: TraitMatch[] = [];
    
    // For each trait, calculate how well it matches
    traits.forEach(trait => {
      const traitScore = traitScores[animal.id][trait.id];
      const animalTrait = animal.traits[trait.id];
      const traitLevel = animalTrait?.level || 'none';
      
      // Scale trait score based on animal's trait level
      let levelMultiplier;
      switch(traitLevel) {
        case 'high': levelMultiplier = 1.5; break;
        case 'medium': levelMultiplier = 1.0; break;
        case 'low': levelMultiplier = 0.5; break;
        case 'none': 
        default: levelMultiplier = 0.1;
      }
      
      // Weight by trait importance
      const importance = trait.importanceWeight / 10;
      
      // 特性の絶対値スコアを計算
      const rawScore = Math.abs(traitScore);
      // 方向性が合致しているかを確認 (正のスコアは正の特性に、負のスコアは負の特性に)
      const directionMultiplier = (traitScore > 0 && traitLevel !== 'none') ? 1 : 0.2;
      
      // Calculate final trait match score (must be positive)
      const matchScore = Math.abs(traitScore) * levelMultiplier * importance * directionMultiplier;
      
      // Add to total possible score for normalization
      totalPossibleScore += rawScore * 1.5 * importance; // 最大値を計算
      
      // Add to total score
      totalTraitScore += matchScore;
      
      // Add to trait matches list
      if (traitLevel !== 'none') {
        traitMatches.push({
          trait: {
            id: trait.id,
            name: trait.name,
            description: trait.description
          },
          level: traitLevel,
          matchScore: matchScore
        });
      }
    });
    
    // 特性スコアを0-1の範囲に正規化
    const normalizedTraitScore = totalPossibleScore > 0 
      ? Math.min(1, Math.max(0, totalTraitScore / totalPossibleScore))
      : 0;
    
    // Add in the base probability from Bayesian updates
    const baseProbability = candidateAnimals[animal.id] || 0;
    
    // 特性スコアとベイジアン確率の重み付け調整
    const totalScore = normalizedTraitScore * 0.6 + baseProbability * 0.4;
    
    // Sort trait matches by match score
    traitMatches.sort((a, b) => b.matchScore - a.matchScore);
    
    return {
      animal, 
      score: totalScore, 
      traitMatches
    };
  });
  
  // Sort by score in descending order
  animalMatches.sort((a, b) => b.score - a.score);
  
  return animalMatches;
};
