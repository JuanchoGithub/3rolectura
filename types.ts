export enum GameState {
  NOT_STARTED,
  READING,
  COMPREHENSION,
  VOCABULARY,
  RESULTS,
  ERROR,
  SPECIAL_LEVEL,
  RECONSTRUCTION,
}

export enum QuestLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
  SPECIAL = 'special',
}

export interface VocabularyWord {
  word: string;
  definition: string;
}

export interface ComprehensionQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuestData {
  title: string;
  passage: string;
  vocabulary: VocabularyWord[];
  comprehensionQuestions: ComprehensionQuestion[];
  level: QuestLevel;
  reconstruction?: ReconstructionData;
}

export interface ReconstructionData {
  scenes: { id: string; text: string; order: number }[];
  parts: {
    subjects: { id: string; text: string }[];
    verbs: { id: string; text: string }[];
    objects: { id: string; text: string }[];
  };
  sentences: {
    id: string;
    structure: string[];
    text: string;
  }[];
}

export interface PlayerStats {
  wpm: number;
  comprehensionCorrect: number;
  comprehensionTotal: number;
  vocabularyCorrect: number;
  vocabularyTotal: number;
  totalScore: number;
}