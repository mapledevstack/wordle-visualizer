import ALL_WORDS from "./data/allWords.js";
import BASE_EXPECTED_INFO from "./data/baseExpectedInfo.js"

export const WORD_LENGTH = 5;
export const MAX_GUESSES = 6;
export const TOTAL_INFORMATION = Math.log2(ALL_WORDS.length);

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
  expectedInfo: BASE_EXPECTED_INFO
}
