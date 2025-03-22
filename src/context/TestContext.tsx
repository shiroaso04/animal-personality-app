import React, { createContext, useContext, useState } from 'react';
import { TestState } from '../types';
import { animals as allAnimals } from '../data/animals';
import { questions as allQuestions } from '../data/questions';
import { selectBestQuestion, updateProbabilities, evaluateCandidates } from '../utils/bayesianInference';

// Define the context type
interface TestContextType {
  state: TestState;
  startTest: () => void;
  answerQuestion: (answer: boolean) => void;
  resetTest: () => void;
  showExplanation: () => void;
  returnToIntro: () => void;
  goToPreviousQuestion: () => void;
}

// Create the context
const TestContext = createContext<TestContextType | undefined>(undefined);

// Filter to use only the first 8 animals (ID 01-08)
const filteredAnimals = allAnimals.filter(animal => {
  const animalId = parseInt(animal.id, 10);
  return animalId >= 1 && animalId <= 8;
});

// Initial state
const initialState: TestState = {
  currentQuestion: null,
  questions: [],
  askedQuestions: [],
  candidateAnimals: {},
  answers: {},
  stage: 'intro',
  resultAnimal: null,
  topMatches: [],
  questionHistory: []
};

// Provider component
export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<TestState>(initialState);

  // Initialize the test
  const startTest = () => {
    // Initialize candidateAnimals with equal probabilities
    const initialProbabilities: Record<string, number> = {};
    filteredAnimals.forEach(animal => {
      initialProbabilities[animal.id] = 1 / filteredAnimals.length;
    });

    // Select the first question
    const firstQuestion = selectBestQuestion(
      allQuestions,
      [],
      initialProbabilities,
      filteredAnimals,
      'early'
    );

    // 質問がない場合はデフォルトの最初の質問を使用
    const initialQuestion = firstQuestion || allQuestions[0];

    setState({
      ...initialState,
      questions: allQuestions,
      candidateAnimals: initialProbabilities,
      currentQuestion: initialQuestion,
      questionHistory: [initialQuestion], // Initialize with the first question
      stage: 'testing'
    });
  };

  // Show explanation screen
  const showExplanation = () => {
    setState({
      ...state,
      stage: 'explanation'
    });
  };

  // Return to intro screen
  const returnToIntro = () => {
    setState({
      ...state,
      stage: 'intro'
    });
  };

  // Handle question answering
  const answerQuestion = (answer: boolean) => {
    if (!state.currentQuestion) return;

    // Update the answer record
    const updatedAnswers = {
      ...state.answers,
      [state.currentQuestion.id]: answer
    };

    // Update asked questions list
    const updatedAskedQuestions = [
      ...state.askedQuestions,
      state.currentQuestion.id
    ];

    // Save the current question for history
    const updatedQuestionHistory = [
      ...state.questionHistory,
      state.currentQuestion
    ];

    // Update probabilities using Bayesian inference
    const updatedProbabilities = updateProbabilities(
      answer,
      state.currentQuestion,
      state.candidateAnimals,
      filteredAnimals
    );

    // Count unique traits that have been evaluated based on asked questions
    const evaluatedTraits = new Set<string>();
    updatedAskedQuestions.forEach(questionId => {
      const question = allQuestions.find(q => q.id === questionId);
      if (question) {
        question.relatedTraits.forEach(relation => {
          evaluatedTraits.add(relation.traitId);
        });
      }
    });
    
    // Only check for high probability match if we've evaluated at least 6 unique traits
    // or if we've reached the maximum questions (15)
    const hasEnoughTraits = evaluatedTraits.size >= 6;
    const reachedMaxQuestions = updatedAskedQuestions.length >= 15;
    const highestProbability = Object.entries(updatedProbabilities)
      .sort((a, b) => b[1] - a[1])[0]?.[1] || 0;
    
    const shouldEndTest = reachedMaxQuestions || 
      (hasEnoughTraits && highestProbability > 0.75);

    if (shouldEndTest) {
      // Calculate final scores
      const finalScores = evaluateCandidates(
        updatedProbabilities,
        filteredAnimals,
        updatedAnswers,
        allQuestions
      );

      // Get result animal (top match)
      const resultAnimal = finalScores.length > 0 ? finalScores[0].animal : null;

      setState({
        ...state,
        answers: updatedAnswers,
        askedQuestions: updatedAskedQuestions,
        candidateAnimals: updatedProbabilities,
        stage: 'results',
        resultAnimal,
        topMatches: finalScores.slice(0, 3) // Top 3 matches
      });
    } else {
      // Determine the stage of testing based on the number of questions asked
      let testStage: 'early' | 'middle' | 'late' = 'middle';
      
      if (updatedAskedQuestions.length <= 3) {
        testStage = 'early';
      } else if (updatedAskedQuestions.length >= 10) {
        testStage = 'late';
      }
      
      // Select the next question
      const nextQuestion = selectBestQuestion(
        allQuestions,
        updatedAskedQuestions,
        updatedProbabilities,
        filteredAnimals,
        testStage
      );

      // 質問がない場合（すべての質問を尋ねた場合など）はテストを終了
      if (!nextQuestion) {
        // Calculate final scores
        const finalScores = evaluateCandidates(
          updatedProbabilities,
          filteredAnimals,
          updatedAnswers,
          allQuestions
        );
  
        // Get result animal (top match)
        const resultAnimal = finalScores.length > 0 ? finalScores[0].animal : null;
  
        setState({
          ...state,
          answers: updatedAnswers,
          askedQuestions: updatedAskedQuestions,
          candidateAnimals: updatedProbabilities,
          currentQuestion: null,
          resultAnimal,
          topMatches: finalScores.slice(0, 3), // Top 3 matches
          stage: 'results',
          questionHistory: updatedQuestionHistory
        });
        return;
      }

      setState({
        ...state,
        answers: updatedAnswers,
        askedQuestions: updatedAskedQuestions,
        questionHistory: updatedQuestionHistory,
        candidateAnimals: updatedProbabilities,
        currentQuestion: nextQuestion
      });
    }
  };

  // Go to the previous question
  const goToPreviousQuestion = () => {
    if (!state.questionHistory || state.questionHistory.length <= 1) return;

    // Get the previous question
    const previousQuestion = state.questionHistory[state.questionHistory.length - 2];
    
    // Remove the current question from history
    const updatedQuestionHistory = state.questionHistory.slice(0, -1);
    
    // Remove the last asked question
    const updatedAskedQuestions = state.askedQuestions.slice(0, -1);
    
    // Remove the last answer
    const lastQuestionId = state.askedQuestions[state.askedQuestions.length - 1];
    const { [lastQuestionId]: _, ...updatedAnswers } = state.answers;
    
    // Recalculate probabilities based on the remaining answers
    let updatedProbabilities: Record<string, number> = {};
    
    // Start with equal probabilities
    filteredAnimals.forEach(animal => {
      updatedProbabilities[animal.id] = 1 / filteredAnimals.length;
    });
    
    // Apply each answer to update probabilities
    Object.entries(updatedAnswers).forEach(([questionId, answer]) => {
      const question = allQuestions.find(q => q.id === questionId);
      if (question) {
        updatedProbabilities = updateProbabilities(
          answer,
          question,
          updatedProbabilities,
          filteredAnimals
        );
      }
    });

    setState({
      ...state,
      currentQuestion: previousQuestion,
      askedQuestions: updatedAskedQuestions,
      questionHistory: updatedQuestionHistory,
      answers: updatedAnswers,
      candidateAnimals: updatedProbabilities
    });
  };

  // Reset the test
  const resetTest = () => {
    setState(initialState);
  };

  return (
    <TestContext.Provider
      value={{
        state,
        startTest,
        answerQuestion,
        resetTest,
        showExplanation,
        returnToIntro,
        goToPreviousQuestion
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

// Custom hook to use the test context
export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
