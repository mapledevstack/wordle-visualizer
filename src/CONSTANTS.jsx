import ALL_WORDS from "./allwords";
import { expectedInformation } from "./wordle";

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;
export const TOTAL_INFROMATION = Math.log2(ALL_WORDS.length);

export const ACTION = {
  LETTER: "LETTER",
  ENTER: "ENTER",
  BACKSPACE: "BACKSPACE",
  INIT: "INIT"
}

export const initialState = {
  guesses: [],
  currentGuess: "",
  possibleWords: [...ALL_WORDS],
  targetWord: "",
  result: Array(MAX_GUESSES).fill(null).map(() => Array(WORD_LENGTH).fill(null)),
  bits: Array(MAX_GUESSES).fill(null),
  isPlaying: true,
  message: "",
  expectedInfo: {}
}

export const BASE_EXPECTED_INFO = Object.fromEntries(ALL_WORDS.map(w => [w, expectedInformation(w, ALL_WORDS)]));
