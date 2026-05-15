import { evaluateResult, filterWords, wordExist, wordAlreadyGuessed, expectedInformation } from "./wordle";
import { WORD_LENGTH, MAX_GUESSES, ACTION, initialState, BASE_EXPECTED_INFO } from "./CONSTANTS";
import ALL_WORDS from "./allwords";

export function reducer(state, action) {
  if(!state.isPlaying && action.type !== ACTION.INIT) return state;

  switch (action.type) {
    case ACTION.LETTER:
      if(state.currentGuess.length >= WORD_LENGTH || state.guesses.length >= MAX_GUESSES) {
        return state;  
      }
      return {...state, currentGuess: state.currentGuess + action.key, message: ""}

    
    case ACTION.ENTER:
    if (state.currentGuess.length !== WORD_LENGTH || state.guesses.length >= MAX_GUESSES) {
      return state;
    }

    if (!wordExist(state.currentGuess)) {
      return {...state, message: "Not valid!"}
    }

    if (wordAlreadyGuessed(state.currentGuess, state.guesses)) {
      return {...state, message: "Already guessed!"}
    }

    const result = evaluateResult(state.targetWord, state.currentGuess);
    const newResult = state.result.map((row, index) => index === state.guesses.length ? result : row);

    const isWin = result.every(r => r === "fullMatch");
    const gameOver = isWin || state.guesses.length + 1 >= MAX_GUESSES;

    const newPossibleWords = filterWords(state.currentGuess, result, state.possibleWords);
    const currentBit = -Math.log2(newPossibleWords.length/state.possibleWords.length);
    const newBits = state.bits.map((bit, index) => index === state.guesses.length ? currentBit : bit);

    const expectedInfo = {};
    newPossibleWords.forEach(word => {
      expectedInfo[word] = expectedInformation(word, newPossibleWords);
    });

    const message = gameOver ? (isWin ? "" : `Word is ${state.targetWord.toUpperCase()}`) : "";
    return {...state, guesses: [...state.guesses, state.currentGuess], currentGuess: "", result: newResult, isPlaying: !gameOver, message: message, possibleWords: newPossibleWords, bits: newBits, expectedInfo: expectedInfo}
  
    case ACTION.BACKSPACE:
    if(state.currentGuess.length === 0) {
      return state;  
    }
    return {...state, currentGuess: state.currentGuess.slice(0, -1), message: ""}

    
    case ACTION.INIT:
      return {...initialState, targetWord: action.word, possibleWords: [...ALL_WORDS], expectedInfo: BASE_EXPECTED_INFO, isPlaying: true}

  
    default:
      return state;  
  }
}
