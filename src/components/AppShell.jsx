"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Header from "./Header"

// Replaces the old Vite src/App.jsx shell:
// - theme (dark/light) is client state
// - "mode" is now derived from the active route instead of useState
function AppShell({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)
  const pathname = usePathname()

  const mode = pathname === "/wordle" ? "wordle" : "explanation"

  const appClass = `app ${darkTheme ? "dark" : "light"} ${mode === "wordle" ? "wordle-mode" : ""}`

  return (
    <div className={appClass}>
      <Header mode={mode} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      {children}
    </div>
  )
}

export default AppShell
