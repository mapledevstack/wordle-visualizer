import { useState } from "react";

function Entropy({ handleProceed }) {
  const [N, setN] = useState(32);

  const entropy = Math.log2(N);

  return (
    <section className="entropy">
      <h2>Entropy</h2>

      <p className="large-quote">
        A good Wordle guess is more than a word. It is a way of asking a question
        about the hidden answer.
      </p>

      <p>
        Imagine you are down to just two possible answers. In that case, one
        well-chosen guess can tell you everything you need to know. If the two
        words would return different color patterns, a single response is
        enough to decide between them.
      </p>

      <p>
        Now imagine the opposite: a guess that produces the same pattern for all
        remaining words. That guess wastes a turn, because it leaves the list of
        possibilities essentially unchanged.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            The value of a guess is how much it reduces uncertainty, not how much
            it matches your intuition.
          </i>
        </p>
      </div>

      <div className="section-divider" />

      <p>
        This is what entropy measures: the amount of uncertainty you have before
        a new response arrives. In Wordle, entropy is a way to measure how many
        possible answers are still in play.
      </p>

      <p>
        If every remaining word is equally likely, the uncertainty is simply
        tied to the number of possibilities. In that case, the entropy is
        <b> log₂(N)</b>, where <b>N</b> is the number of remaining words.
      </p>

      <div className="entropy-formula">
        <div className="entropy-formula-label">
          When outcomes are equally likely
        </div>

        <div className="entropy-formula-equation">
          H = log₂(N)
        </div>
      </div>

      <div className="entropy-explorer">
        <div className="entropy-explorer-header">
          <div className="entropy-explorer-label">
            Interactive intuition
          </div>

          <div className="entropy-explorer-title">
            How many yes-or-no questions would you need?
          </div>
        </div>

        <p className="entropy-explorer-text">
          Imagine one item hidden among <b>{N}</b> equally possible choices.
          If every question can only split the possibilities into two groups,
          the minimum amount of information needed to isolate the correct answer
          is:
        </p>

        <div className="entropy-explorer-formula">
          log₂({N}) = {entropy.toFixed(2)} bits
        </div>

        <p className="entropy-explorer-caption">
          Roughly <b>{Math.ceil(entropy)}</b> perfectly efficient yes-or-no
          questions.
        </p>

        <input
          type="range"
          min="2"
          max="4096"
          step="1"
          value={N}
          onChange={(e) => setN(Number(e.target.value))}
          className="entropy-slider"
        />

        <div className="entropy-slider-labels">
          <span>2</span>
          <span>{N} possibilities</span>
          <span>4096</span>
        </div>

        <p className="entropy-explorer-text">
          Notice how slowly the value grows. Doubling the number of possible
          answers only adds one extra bit of uncertainty. Going from 32 words
          to 64 words feels like a huge jump, but from the perspective of
          information, it only means you need one additional binary decision
          to isolate the answer.
        </p>

        <p className="entropy-explorer-text">
          This is why Wordle feedback is so powerful. Each color pattern acts
          like a carefully structured question that cuts away large parts of
          the remaining search space. A strong guess is valuable because it
          creates responses that divide the possibilities efficiently, reducing
          the number of future decisions you still need to make.
        </p>
      </div>

      <p>
        That formula tells us that doubling the number of possibilities adds one
        extra bit of uncertainty. Two possibilities are 1 bit. Four possibilities
        are 2 bits. Eight possibilities are 3 bits.
      </p>

      <p>
        But Wordle is usually not a problem of perfectly equal possibilities.
        Different answers can be more or less likely depending on the feedback
        you have already seen. In that case, entropy is a weighted average of all
        the possible outcomes.
      </p>

      <div className="entropy-formula">
        <div className="entropy-formula-label">
          The full Shannon entropy formula
        </div>

        <div className="entropy-formula-equation">
          H = −∑ pᵢ log₂(pᵢ)
        </div>
      </div>

      <p>
        Here, each <b>pᵢ</b> is the probability of one specific outcome. The term
        <b> −log₂(pᵢ)</b> is the amount of information that outcome carries.
      </p>

      <p>
        The formula says: take every possible result, figure out how likely it is,
        measure how surprising that result would be, and average those values.
        Rare outcomes carry more information, because they rule out a larger
        fraction of the remaining possibilities.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            A strong guess is one that creates a wide range of useful, probable
            responses.
          </i>
        </p>
      </div>

      <p>
        In Wordle, that means a good guess is one whose feedback patterns split
        the remaining words into smaller groups. If the groups are balanced,
        the guess is likely to give you more information no matter what the true
        answer is.
      </p>

      <p>
        That is why a word like <b>WACKY</b> can sometimes be better than a more
        ordinary guess. It may produce more distinct responses across the
        remaining words, so it is more likely to reduce uncertainty.
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
