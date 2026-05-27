import { useState } from "react";
import Header from "./components/Header";
import Explanation from "./components/explanation/Explanation";
import Wordle from "./components/Wordle";
import "./styles/App.css"

function App() {
  const [mode, setMode] = useState("explanation")
  const [darkTheme, setDarkTheme] = useState(true)

  const appClass = `app ${darkTheme ? "dark" : "light"} ${mode === "wordle" ? "wordle-mode" : ""}`

  return (
    <div className={appClass}>
      <Header mode={mode} setMode={setMode} setDarkTheme={setDarkTheme} />
      
      <div className={mode === "explanation" ? "show" : "hide"}> <Explanation setMode={setMode} /> </div>
      <div className={mode === "wordle" ? "show" : "hide"}> <Wordle /> </div>

      
    </div>
  );
}

export default App;
