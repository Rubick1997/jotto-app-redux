export interface CongratsType {
  success?: boolean;
}

export interface GuessedWordsType {
  guessedWords: { guessedWord: string; letterMatchCount: number }[];
}

export interface InputType {
  success: boolean;
  secretWord: string;
}
