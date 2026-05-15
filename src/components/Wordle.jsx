import Board from "./Board";
import Visualizer from "./Visualizer";
import { WORD_LENGTH, MAX_GUESSES, TOTAL_INFORMATION } from "../CONSTANTS";
import "../styles/Wordle.css"

function Wordle({state, newRound}) {
  function neededBits() {
    let accumulatedBits = 0;
    state.bits.forEach(b => b && (accumulatedBits += b));
    return (TOTAL_INFORMATION - accumulatedBits).toFixed(2);
  }

  return (
    <div className="wordle">
      <div className="leftContainer">
        <Board rows={MAX_GUESSES} cols={WORD_LENGTH} state={state}/>
        <div className="message">{state.message}</div>
        <button className="button" onClick={newRound} >🐼</button>
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
