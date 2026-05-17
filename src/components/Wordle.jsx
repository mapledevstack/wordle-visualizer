import Board from "./Board";
import Visualizer from "./Visualizer";
import ALL_WORDS from "../data/allWords";
import { WORD_LENGTH, MAX_GUESSES, ACTION, initialState, TOTAL_INFORMATION } from "../CONSTANTS.js";
import { useEffect, useReducer } from "react";
import { reducer } from "../logic/reducer";
import "../styles/Wordle.css"

function Wordle() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  function newRound(e) {
    if(e) e.currentTarget.blur(); // To remove Retry button focus
    
    const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
    dispatch({type: ACTION.INIT, word: randomWord});
  }
  
  useEffect(()=>{
    newRound(null);
  }, []);

  // Key handling
  useEffect(()=>{
    function handleKey(event) {      
      const key = event.key;
      
      if(/^[a-z]$/i.test(key)) {
        dispatch({type: ACTION.LETTER, key: key.toLowerCase()});
      }
  
      else if(key === "Enter") dispatch({type: ACTION.ENTER});
  
      else if(key === "Backspace") dispatch({type: ACTION.BACKSPACE});
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey); 
  }, []);

  function neededBits() {
    let accumulatedBits = 0;
    state.bits.forEach(b => b && (accumulatedBits += b));
    return (TOTAL_INFORMATION - accumulatedBits).toFixed(2);
  }

  return (
    <div className="wordle">
      <div className="leftContainer">
        <Board rows={MAX_GUESSES} cols={WORD_LENGTH} state={state}/>
        <div className="message">{state.message}</div>
        <button className="button" onClick={newRound} >🐼</button>
        <div className="information">
          Information needed: <b>{neededBits()}</b> bits
        </div>
      </div>
      <div className="rightContainer">
        <Visualizer expectedInfo={state.expectedInfo} />
      </div>
    </div>
  )
}
export default Wordle
