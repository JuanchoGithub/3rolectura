export enum GameState {
  NOT_STARTED,
  READING,
  COMPREHENSION,
  VOCABULARY,
  RESULTS,
  ERROR,
}

export enum QuestLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced',
}

export interface VocabularyWord {
  word: string;
  definition: string;
}

export interface ComprehensionQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface QuestData {
  title: string;
  passage: string;
  vocabulary: VocabularyWord[];
  comprehensionQuestions: ComprehensionQuestion[];
  level: QuestLevel;
}

export interface PlayerStats {
  wpm: number;
  comprehensionCorrect: number;
  comprehensionTotal: number;
  vocabularyCorrect: number;
  vocabularyTotal: number;
  totalScore: number;
}