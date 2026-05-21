function Entropy({ handleProceed }) {
  return (
    <section className="entropy">
      <h2>Entropy</h2>

      <p className="large-quote">
        A good Wordle guess is not just a word.
        <br />
        It is a question designed to reduce uncertainty.
      </p>

      <p>
        Earlier, we compared two guesses: <b>AUDIO</b> and <b>WACKY</b>.
        Although AUDIO looks more “normal” as a Wordle guess, WACKY reduced the
        remaining possibilities much more aggressively. Even when its letters
        came back gray, the guess still revealed a large amount of information
        because it ruled out many candidate answers at once.
      </p>

      <p>
        This idea sits at the center of information theory. Information is not
        measured by how surprising or clever something feels. It is measured by
        how much uncertainty it removes.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            The more uncertainty a message removes, the more information it
            contains.
          </i>
        </p>
      </div>

      <div className="section-divider" />

      <p>
        Suppose you somehow knew that only two answers were still possible:
      </p>

      <ul>
        <li>LINER</li>
        <li>TIGER</li>
      </ul>

      <p>
        At that point, the game feels almost solved already. You are no longer
        trying to “cover letters” or search broadly through the alphabet. You
        simply need a guess that separates the two possibilities. If one pattern
        implies LINER and another implies TIGER, then a single response is
        enough to determine the answer completely.
      </p>

      <p>
        Now compare that with a very different situation. Imagine making a guess
        where every remaining answer produces exactly the same color pattern. No
        matter what the hidden word is, the board responds identically. After
        the guess, you are left with essentially the same uncertainty as before.
        The same answers remain plausible, and the game has barely progressed.
      </p>

      <p>
        These two guesses may both consume one turn, but they clearly do not
        provide the same amount of information. One collapses the search space
        immediately, while the other barely changes it at all.
      </p>

      <p>
        Information theory begins with the idea that this difference should be
        measurable. Claude Shannon called this quantity <b>entropy</b>.
      </p>

      <div className="section-divider" />

      <p>
        Entropy measures how much uncertainty exists before new information is
        received. In Wordle, entropy represents how uncertain we are about the
        hidden word at any moment in the game.
      </p>

      <p>
        High entropy means many answers are still plausible. Low entropy means
        the possibilities have been narrowed down to only a few. Every guess
        changes that uncertainty, and strong guesses reduce it quickly by
        producing outcomes that sharply divide the remaining possibilities.
      </p>

      <div className="entropy-formula">
        <div className="entropy-formula-label">
          Shannon Entropy
        </div>

        <div className="entropy-formula-equation">
          H = log₂(N)
        </div>
      </div>

      <p>
        If there are <b>N</b> equally likely possibilities, entropy grows
        logarithmically with the number of possibilities. This quantity is
        measured in <b>bits</b>.
      </p>

      <div className="entropy-grid">
        <div className="entropy-card">
          <div className="entropy-card-title">
            2 Possibilities
          </div>

          <div className="entropy-card-value">
            1 bit
          </div>

          <div className="entropy-card-description">
            A single yes-or-no distinction is enough to determine the answer.
          </div>
        </div>

        <div className="entropy-card">
          <div className="entropy-card-title">
            4 Possibilities
          </div>

          <div className="entropy-card-value">
            2 bits
          </div>

          <div className="entropy-card-description">
            Two binary decisions are required to isolate the correct outcome.
          </div>
        </div>

        <div className="entropy-card">
          <div className="entropy-card-title">
            8 Possibilities
          </div>

          <div className="entropy-card-value">
            3 bits
          </div>

          <div className="entropy-card-description">
            Every additional bit doubles the number of distinguishable outcomes.
          </div>
        </div>
      </div>

      <p>
        This changes the way Wordle should be viewed. The objective is not
        merely to guess words containing common letters. The real objective is
        to choose guesses that reduce uncertainty as efficiently as possible.
      </p>

      <p>
        Strong guesses create very different outcomes for different answers,
        rapidly shrinking the remaining search space. Weak guesses tend to lump
        many answers together, revealing relatively little.
      </p>

      <p>
        This is why unusual words can sometimes outperform intuitive ones. A
        word like <b>WACKY</b> may look inefficient at first glance, but if it
        separates the remaining possibilities more effectively, then it carries
        more information.
      </p>

      <p className="large-quote">
        Wordle is not fundamentally a vocabulary game.
        <br />
        It is an information game.
      </p>

      <button
        className="proceed-button"
        onClick={() => handleProceed(3)}
      >
        How do we apply this to Wordle?
      </button>
    </section>
  );
}

export default Entropy;
