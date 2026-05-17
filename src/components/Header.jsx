import { useEffect, useRef, useState } from "react"


function Header({mode, setMode, setDarkTheme}) {
  const [showHeader, setShowHeader] = useState(true)
  const prevScrollY = useRef(0)

  useEffect(() => {
    if(mode !== "explanation") {
      setShowHeader(true)
      return
    }

    function handleScroll() {
      const currScrollY = window.scrollY
      
      if(currScrollY < 50) {
        setShowHeader(true)
      } else if(currScrollY > prevScrollY.current) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      prevScrollY.current = currScrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mode])

  return (
    <div className={showHeader ? "header visible" : "header hidden"}>
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
