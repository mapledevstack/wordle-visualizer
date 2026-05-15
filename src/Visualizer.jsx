  function Visualizer({ expectedInfo }) {

    const sortedInfo = Object.entries(expectedInfo).sort((a, b) => b[1] - a[1]);

    return (
      <div>
          {sortedInfo.map(([word, info], index) => (
              <div key={index} className="wordsAndNums">
                <div className="words">{word[0].toUpperCase() + word.slice(1)}</div>
                <div className="nums">{info.toFixed(2)}</div>
              </div>
          ))}
      </div>
    )
  }

  export default Visualizer;
