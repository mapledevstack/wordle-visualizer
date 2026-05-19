import { useState } from "react"
import "../../styles/Explanation.css"
import Introduction from "./Introduction"
import Experiment from "./Experiment"
import Entropy from "./Entropy"

function Explanation() {
  const [progress, setProgress] = useState(0)

  function handleProceed(nextProgress) {
    setProgress(nextProgress);

    requestAnimationFrame(() => {
      window.scrollBy({
        top: 300,
        behavior: "smooth",
      });
    });
  }

  return (
    <div className="explanation">
      <div className="main-content">
        <Introduction handleProceed={handleProceed}/>
        {progress >= 1 && <Experiment handleProceed={handleProceed}/>}
        {progress >= 2 && <Entropy />}
      </div>
    </div>
  )
}
export default Explanation
