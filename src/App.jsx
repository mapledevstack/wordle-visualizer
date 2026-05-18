import { useState } from "react";
import Header from "./components/Header";
import Explanation from "./components/explanation/Explanation";
import Wordle from "./components/Wordle";
import "./styles/App.css"

function App() {
  const [mode, setMode] = useState("explanation")
  const [darkTheme, setDarkTheme] = useState(true)

  return (
    <div className={`app ${darkTheme ? "dark" : "light"}`}>
      <Header mode={mode} setMode={setMode} setDarkTheme={setDarkTheme} />
      
      <div className={mode === "explanation" ? "show" : "hide"}> <Explanation /> </div>
      <div className={mode === "wordle" ? "show" : "hide"}> <Wordle /> </div>
    </div>
  );
}

export default App;
