import { useState } from "react";

function Visualizer({ expectedInfo }) {
  const [query, setQuery] = useState("");
  const [sortDesc, setSortDesc] = useState(true);

  const sortedInfo = Object.entries(expectedInfo).sort((a, b) =>
    sortDesc ? b[1] - a[1] : a[1] - b[1]
  );

  const normalizedQuery = query.trim().toLowerCase();

  const filteredInfo = !normalizedQuery
    ? sortedInfo
    : sortedInfo.filter(([word]) =>
        word.toLowerCase().includes(normalizedQuery)
      );

  const totalInfo = filteredInfo.reduce(
    (sum, [, info]) => sum + info,
    0
  );

  const formatProbability = (value) =>
    `${Number((value * 100).toFixed(1))}%`;

  return (
    <div className="visualizer">
      <div className="visualizerHeader">
        <input
          className="visualizerSearch"
          type="search"
          placeholder="Search words..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search visualizer words"
        />

        <button
          type="button"
          className="visualizerSortButton"
          onClick={() => setSortDesc((prev) => !prev)}
          aria-label="Toggle sort order"
          title="Toggle sort order"
        >
          ⇅
        </button>

        <div className="visualizerCount">
          {filteredInfo.length} result
          {filteredInfo.length === 1 ? "" : "s"}
        </div>
      </div>

      {filteredInfo.length === 0 ? (
        <div className="visualizerEmpty">
          No matches found
        </div>
      ) : (
        <div className="visualizerList">
          <div className="visualizerHeadingRow">
            <div className="visualizerHeadingWord">
              Word
            </div>

            <div className="visualizerHeadingInfo">
              Expected Information
            </div>

            <div className="visualizerHeadingProbability">
              Probability
            </div>
          </div>

          {filteredInfo.map(([word, info], index) => {
            const probability =
              totalInfo === 0
                ? 1 / filteredInfo.length
                : info / totalInfo;

            return (
              <div key={index} className="wordsAndNums">
                <div className="words">
                  {word[0].toUpperCase() + word.slice(1)}
                </div>

                <div className="nums">
                  {info.toFixed(2)}
                </div>

                <div className="probability">
                  {formatProbability(probability)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Visualizer;
