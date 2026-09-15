import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const TargetWord = ({ word }) => {
  const [revealed, setRevealed] = useState(false)

  function toggleReveal(e) {
    if (e) e.currentTarget.blur() // To remove Eye button focus
    setRevealed((r) => !r)
  }

  return (
    <div className="targetWord">
      <div className={`targetWordText ${revealed ? "" : "targetWordHidden"}`}>
        {word ? word.toUpperCase() : ""}
      </div>
      <button
        className="targetWordEye"
        onClick={toggleReveal}
        title={revealed ? "Hide answer" : "Reveal answer"}
        aria-pressed={revealed}
      >
        {revealed ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  )
}
export default TargetWord
