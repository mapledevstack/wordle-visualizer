function Experiment() {
  return (
    <section className="experiment">
      <h2>Experiment</h2>

      <p>
        Before introducing any formulas, let's begin with a simple question.
      </p>

      <p>
        Suppose you are playing Wordle and are deciding between two possible
        guesses. Which one would you choose?
      </p>

      <p>
        One word contains several common vowels and seems broadly useful.
        The other includes rarer letters and appears much more specific.
      </p>

      <p>
        At first glance, the better choice may seem obvious.
      </p>

      <p>
        But rather than relying on intuition alone, we can ask a more precise
        question:
      </p>

      <p className="question-text">
        <b>Which guess is expected to eliminate more possibilities?</b>
      </p>

      <p>
        Make your prediction before continuing.
      </p>

      {/* Interactive comparison component will go here */}
      {/* <GuessComparison /> */}
    </section>
  );
}

export default Experiment;
