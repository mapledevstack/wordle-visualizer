import { MAX_GUESSES, WORD_LENGTH } from "../CONSTANTS.js";
import ALL_WORDS from "../data/allWords.js";

const wordSet = new Set(ALL_WORDS);

export function evaluateResult(target, guess) {
  const result = Array(WORD_LENGTH).fill("noMatch");

  const targetWord = [...target];
  const guessWord = [...guess];

  const counts = {};
  targetWord.forEach(l => counts[l] = (counts[l] || 0) + 1);

  for (let i=0; i<WORD_LENGTH; i++) {
    if(targetWord[i] === guessWord[i]) {
      result[i] = "fullMatch";
      counts[targetWord[i]]--;
      guessWord[i] = "";
    }
  }

  for (let i=0; i<WORD_LENGTH; i++) {
    if(counts[guessWord[i]]) {
      result[i] = "partialMatch";
      counts[guessWord[i]]--;
    }
  }

  return result;
}

export function wordExist(guess) {
  return wordSet.has(guess);
}

export function filterWords(guess, result, words) {
  let newPossibleWords = words;
  
  // Full Match filter
  newPossibleWords = newPossibleWords.filter(word => {
    for (let i=0; i<result.length; i++) {
      if (result[i] === "fullMatch" && word[i] !== guess[i]) {
        return false;
      }
    }
    return true;
  });

  // Partial Match filter
  newPossibleWords = newPossibleWords.filter(word => {
    for (let i=0; i<result.length; i++) {
      if (result[i] === "partialMatch") {
        if (word[i] === guess[i] || !word.includes(guess[i]))
          return false;
      }
    }
    return true;
  });

  // No Match filter
  newPossibleWords = newPossibleWords.filter(word => {
    for (let i=0; i<result.length; i++) {
      if (result[i] === "noMatch") {
        const countInWord = [...word].filter(l => l === guess[i]).length;
        const countInGuess = [...guess].filter((l, index) => 
          l === guess[i] && (result[index] === "partialMatch" || result[index] === "fullMatch")
      ).length;
        
        if (countInWord > countInGuess)
          return false;
      }
    }
    return true;
  })

  return newPossibleWords;
}

export function wordAlreadyGuessed(guess, guesses) {
  return guesses.includes(guess);
}

export function expectedInformation(guess, words) {
  const patternCounts = new Map();

  words.forEach(word => {
    const result = evaluateResult(word, guess).join("");
    patternCounts.set(result, (patternCounts.get(result) || 0) + 1);
  });

  let info = 0;
  patternCounts.forEach(count => {
    const p = count / words.length;
    info += -p * Math.log2(p);
  });

  return info;
}

