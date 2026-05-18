function Introduction({handleProceed}) {
  return (
    <section className="introduction">
      <h1>
        Information Theory using <i>Wordle</i>
      </h1>

      <p>
        If you're not familiar with <i>Wordle</i>, you can try it at{" "}
        <a
          href="https://www.nytimes.com/games/wordle/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          The New York Times Wordle
        </a>{" "}
        and then return to this explanation.
      </p>

      <p>
        At first glance, Wordle seems like a simple game of vocabulary and luck.
        But each guess is really a question. You choose a word, and the game
        responds with a pattern of green, yellow, and gray tiles that reduces
        the number of possible answers. Some guesses narrow the possibilities
        only slightly, while others eliminate thousands of words at once.
      </p>

      <p>
        This leads to a surprisingly deep question:
      </p>

      <p className="question-text">
        <b>How do we measure the value of a question?</b>
      </p>

      <p>
        That question lies at the heart of information theory, a field developed
        by <i>Claude&nbsp;Shannon</i> in 1948.
      </p>

      <p>
        In this interactive essay, we will use Wordle as a concrete setting to
        build the ideas from first principles and see how a simple word game
        leads naturally to one of the most beautiful concepts in mathematics: 
        <b> Entropy</b>.
      </p>

      <button className="proceed-button" onClick={() => handleProceed(1)}>Proceed?</button>
    </section>
  );
}

export default Introduction;
