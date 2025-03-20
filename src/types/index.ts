// Define the level of a behavioral trait
export type TraitLevel = 'high' | 'medium' | 'low' | 'none';

// Define a behavioral trait that animals can have
export interface BehavioralTrait {
  id: string;
  name: string;
  description: string;
  importanceWeight: number; // How important this trait is for identification (1-10)
}

// Define an animal with its behavioral traits
export interface Animal {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  imageUrl: string;
  traits: Record<string, TraitLevel>; // Maps trait id to level
}

// Define a question for the personality test
export interface Question {
  id: string;
  text: string;
  relatedTraitId: string;
  narrowingScore?: number; // Dynamic score for narrowing down candidates
  correctnessScore?: number; // Dynamic score for ensuring accuracy
  negationScore?: number; // Score for negation power
  matchScore?: number; // Score for matching important traits
  excludeScore?: number; // Score for excluding based on low correlation
}

// Define trait match information
export interface TraitMatch {
  trait: {
    id: string;
    name: string;
    description: string;
  };
  level: TraitLevel;
  matchScore: number; // 0-1 score showing how well this trait matches
}

// Define the test state
export interface TestState {
  currentQuestion: Question | null;
  questions: Question[];
  askedQuestions: string[];
  candidateAnimals: Record<string, number>; // Maps animal id to probability
  answers: Record<string, boolean>; // Maps question id to answer (true = yes, false = no)
  stage: 'intro' | 'explanation' | 'testing' | 'results';
  resultAnimal: Animal | null;
  topMatches: {animal: Animal, score: number, traitMatches?: TraitMatch[]}[];
  questionHistory: Question[]; // History of questions for going back
}
