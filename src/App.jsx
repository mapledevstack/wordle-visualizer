import { useState, useEffect, useReducer } from "react";
import { reducer } from "./logic/reducer";
import { WORD_LENGTH, MAX_GUESSES, ACTION, initialState, TOTAL_INFORMATION } from "./CONSTANTS";
import ALL_WORDS from "./data/allWords";
import Wordle from "./components/Wordle";
import Explanation from "./components/Explanation";
import "./styles/App.css"
import Header from "./components/Header";

function App() {
  const [mode, setMode] = useState("explanation")
  const [darkTheme, setDarkTheme] = useState(true)
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
      if(mode === "explanation") return
      
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


  return (
    <div className={`app ${darkTheme ? "dark" : "light"}`}>
      <Header setMode={setMode} setDarkTheme={setDarkTheme} />
      
      {mode === "explanation" && <Explanation />}
      {mode === "wordle" && <Wordle state={state} newRound={newRound} />}
    </div>
  );
}

export default App;
