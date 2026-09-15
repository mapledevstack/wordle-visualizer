import { useState } from "react"
import { useRouter } from "next/navigation"

function ExpectedInformation() {
  const [selectedGuess, setSelectedGuess] = useState("balanced")
  const router = useRouter()

  const examples = {
    balanced: {
      word: "SLATE",
      groups: [12, 10, 9, 11, 8],
      description:
        "This guess spreads the possibilities into several medium-sized groups. No matter what feedback you receive, the remaining search space becomes much smaller.",
    },

    unbalanced: {
      word: "WACKY",
      groups: [42, 2, 1, 3, 1],
      description:
        "This guess creates a few excellent outcomes, but most responses still leave a very large cluster of possible answers behind.",
    },
  }

  const current = examples[selectedGuess]

  return (
    <section className="expected-information">
      <h2>Expected Information</h2>

      <p className="large-quote">
        In Wordle, the smartest guess is not the one that feels lucky; it is the
        one that gives you the most reliable reduction in the remaining words.
      </p>

      <p>
        Once you reach the middle of a Wordle game, every guess becomes a way of
        organizing uncertainty. You already have a list of possible answers, and
        each candidate word divides that list differently.
      </p>

      <p>
        Some guesses carve the remaining words into many smaller groups. Others
        leave one enormous cluster still unresolved. The goal is not simply to
        find a word that can produce one amazing outcome. The goal is to choose
        a word that performs well across the entire range of possible responses.
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            A good guess is one that keeps helping you regardless of what colors
            appear.
          </i>
        </p>
      </div>

      <div className="section-divider" />

      <p>
        Imagine there are still 50 possible answers left. Below are two
        hypothetical guesses. Each bar represents how many candidate words would
        remain after one particular feedback pattern.
      </p>

      <div className="guess-selector">
        <button
          className={`guess-option ${
            selectedGuess === "balanced" ? "active" : ""
          }`}
          onClick={() => setSelectedGuess("balanced")}
        >
          Balanced split
        </button>

        <button
          className={`guess-option ${
            selectedGuess === "unbalanced" ? "active" : ""
          }`}
          onClick={() => setSelectedGuess("unbalanced")}
        >
          Unbalanced split
        </button>
      </div>

      <div className="partition-visualizer">
        <div className="partition-header">
          Guess: <b>{current.word}</b>
        </div>

        <div className="partition-bars">
          {current.groups.map((size, index) => (
            <div key={index} className="partition-row">
              <div
                className="partition-bar"
                style={{
                  width: `${(size / 50) * 100}%`,
                }}
              />

              <span className="partition-value">{size} words</span>
            </div>
          ))}
        </div>

        <p className="partition-description">{current.description}</p>
      </div>

      <p>
        The first guess is more informative because its outcomes are balanced.
        Almost every possible response cuts the search space down substantially.
        The second guess has a few spectacular outcomes, but most of the time it
        leaves you with a huge unresolved group.
      </p>

      <p>
        Expected information is essentially a way of measuring the average
        quality of those splits before the guess is even played. Instead of
        asking:
      </p>

      <p className="large-quote">“What is the best thing that could happen?”</p>

      <p>...the algorithm asks:</p>

      <p className="large-quote">
        “On average, how much uncertainty will this guess remove?”
      </p>

      <div className="highlight-box">
        <p style={{ marginBottom: 0 }}>
          <i>
            Strong Wordle play is not about chasing lucky outcomes. It is about
            consistently shrinking the search space.
          </i>
        </p>
      </div>

      <p>
        That is what the Visualizer scores represent. Every candidate word is
        tested against every remaining possibility, and the words near the top
        are the ones expected to reveal the most information on average.
      </p>

      <button className="proceed-button" onClick={() => router.push("/wordle")}>
        Try choosing the most informative word
      </button>
    </section>
  )
}

export default ExpectedInformation
