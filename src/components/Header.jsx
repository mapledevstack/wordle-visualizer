"use client"

import { Github } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function Header({ mode, setDarkTheme }) {
  const [showHeader, setShowHeader] = useState(true)
  const prevScrollY = useRef(0)

  useEffect(() => {
    if (mode !== "explanation") {
      setShowHeader(true)
      return
    }

    function handleScroll() {
      const currScrollY = window.scrollY

      if (currScrollY < 50) {
        setShowHeader(true)
      } else if (currScrollY > prevScrollY.current) {
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
        <Link href="/">Explanation</Link>
        <Link href="/wordle">Wordle</Link>
      </div>

      <a
        href="https://github.com/mapledevstack/wordle-visualizer"
        target="_blank"
        rel="noreferrer"
        className="github-button"
      >
        <Github size={18} />
        <span>GitHub</span>
      </a>

      <div className="toggle">
        <button onClick={() => setDarkTheme(false)}>Light</button>
        <button onClick={() => setDarkTheme(true)}>Dark</button>
      </div>
    </div>
  )
}
export default Header
