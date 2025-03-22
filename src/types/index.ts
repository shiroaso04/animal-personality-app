// Define the level of a behavioral trait
export type TraitLevel = 'high' | 'medium' | 'low' | 'none';

// Define a behavioral trait that animals can have
export interface BehavioralTrait {
  id: string;
  name: string;
  description: string;
  importanceWeight: number; // How important this trait is for identification (1-10)
}

// Define evidence structure for trait
export interface TraitEvidence {
  description: string;
  title: string;
  source: string;
}

// Define trait with level and evidence
export interface Trait {
  level: TraitLevel;
  evidence: TraitEvidence[];
}

// Define an animal with its behavioral traits
export interface Animal {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  imageUrl: string;
  traits: Record<string, Trait>; // Maps trait id to trait object with level and evidence
}

// Define a question for the personality test
export interface TraitRelation {
  traitId: string;
  matchScore: number; // 特性との関連の強さ
  narrowingScore: number; // 回答の確実性
}

// Define a question for the personality test
export interface Question {
  id: string;
  text: string;
  relatedTraits: TraitRelation[]; // 複数の特性との関連
  correctnessScore: number; // 質問自体の信頼性
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
