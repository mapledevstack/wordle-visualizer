import { useState } from "react"
import "../../styles/Explanation.css"
import Introduction from "./Introduction"
import Experiment from "./Experiment"

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
        {progress >= 1 && <Experiment />}
      </div>
    </div>
  )
}
export default Explanation
