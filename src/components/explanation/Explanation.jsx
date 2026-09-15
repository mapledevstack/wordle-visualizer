"use client"

import { useState } from "react"
import "../../styles/Explanation.css"
import Introduction from "./Introduction"
import Experiment from "./Experiment"
import Entropy from "./Entropy"
import ExpectedInformation from "./ExpectedInformation"

function Explanation() {
  const [progress, setProgress] = useState(0)

  function handleProceed(nextProgress) {
    setProgress(nextProgress)

    requestAnimationFrame(() => {
      window.scrollBy({
        top: 300,
        behavior: "smooth",
      })
    })
  }

  return (
    <div className="explanation">
      <div className="main-content">
        <Introduction handleProceed={handleProceed} />
        {progress >= 1 && <Experiment handleProceed={handleProceed} />}
        {progress >= 2 && <Entropy handleProceed={handleProceed} />}
        {progress >= 3 && <ExpectedInformation />}
      </div>
    </div>
  )
}
export default Explanation
