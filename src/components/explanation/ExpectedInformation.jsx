function ExpectedInformation({ handleProceed, setMode }) {
  return (
    <section className="expected-information">
      <h2>Expected Information</h2>

      <p className="large-quote">
        In Wordle, the smartest guess is not the one that feels lucky; it is the
        one that gives you the most reliable reduction in the remaining words.
      </p>

      <p>
        At this stage of the game, you are not choosing blindly. You already
        have a list of words that could still be the answer. Every guess is
        measured by what it does to that list.
      </p>

      <p>
        A guess can lead to many different color responses. Some of those
        responses will leave you with a tiny set of possibilities, while others
        will leave you with a much larger set. The trick is to judge the guess
        by how it performs across all of those possible outcomes.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            We are choosing the word that is expected to shrink the search space
            the most, not the word that looks best in one particular case.
          </i>
        </p>
      </div>

      <div className="section-divider" />

      <p>
        To do this, we look at each candidate word and imagine how it would
        behave against every remaining possibility. For each possible feedback
        pattern, we see how many words would still be valid.
      </p>

      <p>
        If a guess tends to split the remaining list into smaller groups, then
        it gives more useful information. If it leaves one giant group and a few
        tiny ones, it is less helpful. The score we assign to a guess is the
        average strength of those splits.
      </p>

      <p>
        In simpler terms: a strong guess is one that is likely to tell you more
        about the answer, even before you see the colors. That is the idea behind
        the Visualizer scores you are seeing.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            This method is about dependable information gain, not the single
            response you hope for.
          </i>
        </p>
      </div>

      <p>
        The Visualizer list ranks candidate words by that expected value. Words
        near the top are the ones that are most likely to reduce the remaining
        possibilities and move you closer to the answer.
      </p>

      <button
        className="proceed-button"
        onClick={() => setMode("wordle")}
      >
        Try choosing the most informative word
      </button>
    </section>
  );
}

export default ExpectedInformation;
