"use client"

import Board from "./Board"
import Visualizer from "./Visualizer"
import ALL_WORDS from "../data/allWords"
import TargetWord from "./TargetWord"
import {
  WORD_LENGTH,
  MAX_GUESSES,
  ACTION,
  initialState,
  TOTAL_INFORMATION,
} from "../CONSTANTS.js"
import { useEffect, useReducer, useState } from "react"
import { CalendarDays, LoaderCircle } from "lucide-react"
import { reducer } from "../logic/reducer"

function Wordle() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loadingToday, setLoadingToday] = useState(false)

  function newRound(e) {
    if (e) e.currentTarget.blur() // To remove Retry button focus

    const randomWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)]
    dispatch({ type: ACTION.INIT, word: randomWord })
  }

  async function useTodaysWord(e) {
    if (e) e.currentTarget.blur() // To remove Today button focus

    if (loadingToday) return
    setLoadingToday(true)

    try {
      const res = await fetch("/api/todays-word")
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json()
      if (!data.solution) throw new Error("Missing solution in response")

      dispatch({ type: ACTION.INIT, word: data.solution.toLowerCase() })
    } catch {
      dispatch({ type: ACTION.MESSAGE, message: "Couldn't fetch today's Wordle" })
    } finally {
      setLoadingToday(false)
    }
  }

  useEffect(() => {
    newRound(null)
  }, [])

  // Key handling
  useEffect(() => {
    function handleKey(event) {
      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return
      }

      const key = event.key

      if (/^[a-z]$/i.test(key)) {
        dispatch({ type: ACTION.LETTER, key: key.toLowerCase() })
      } else if (key === "Enter") dispatch({ type: ACTION.ENTER })
      else if (key === "Backspace") dispatch({ type: ACTION.BACKSPACE })
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  function neededBits() {
    let accumulatedBits = 0
    state.bits.forEach((b) => b && (accumulatedBits += b))
    return (TOTAL_INFORMATION - accumulatedBits).toFixed(2)
  }

  return (
    <div className="wordle">
      <div className="leftContainer">
        <div className="targetWordRow">
          <TargetWord word={state.targetWord} />
          <button
            className="button buttonSquare"
            onClick={useTodaysWord}
            title="Set today's Wordle answer as the target word"
            aria-label="Set today's Wordle answer as the target word"
            disabled={loadingToday}
          >
            {loadingToday ? <LoaderCircle size={24} className="spin" /> : <CalendarDays size={24} />}
          </button>
        </div>
        <Board rows={MAX_GUESSES} cols={WORD_LENGTH} state={state} />
        <div className="message">{state.message}</div>
        <button className="button" onClick={newRound} title="New round">
          ↻
        </button>
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
