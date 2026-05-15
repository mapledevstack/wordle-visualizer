function Header({setMode, setDarkTheme}) {
  return (
    <div className="header">
      <div className="toggle">
        <button onClick={() => setMode("explanation")}>Explanation</button>
        <button onClick={() => setMode("wordle")}>Wordle</button>
      </div>

      <div className="toggle">
        <button onClick={() => setDarkTheme(false)}>Light</button>
        <button onClick={() => setDarkTheme(true)}>Dark</button>
      </div>
    </div>
  )
}
export default Header
