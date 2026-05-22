function Board({ rows, cols, state}) {
  const guesses = [...state.guesses, state.currentGuess]

  function getColor(result) {
    if (result === "noMatch") return "darkgray";
    if (result === "fullMatch") return "lime";
    if (result === "partialMatch") return "gold";

    return "black";
  }

  function getExpectedColor(actual, expected) {
    if (actual == null || expected == null || Number.isNaN(actual) || Number.isNaN(expected)) {
      return "white";
    }

    const delta = actual - expected;
    const tolerance = 0.01;

    if (delta > tolerance) return "lime";
    if (delta < -tolerance) return "#ff6b6b";
    return "white";
  }

  return (
    <div className="board">
      {Array(rows).fill(null).map((_, rowIndex) => {
        const word = guesses[rowIndex] || "";
        const expectedColor = getExpectedColor(Number(state.bits[rowIndex]), Number(state.expectedBits[rowIndex]));
        return (
          <div className="rowAndBits" key={rowIndex}>
            <div className="row">
              {Array(cols).fill(null).map((_, colIndex) => {
                const letter = word[colIndex] || "";
                const color = getColor(state.result[rowIndex][colIndex]);
                return (
                  <div 
                    className="cell" 
                    key={colIndex}
                    style={{backgroundColor: color}}
                  >
                    {letter.toUpperCase()}
                  </div>
                );
              })}
            </div>
            <div 
              className="bits"
              style={{color: expectedColor}}
            >
              {state.bits[rowIndex]?.toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Board;
