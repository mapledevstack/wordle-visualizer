import { useState } from "react";
import Board from "../Board";
import { initialState } from "../../CONSTANTS";
import { evaluateResult } from "../../logic/wordle";

function Experiment({handleProceed}) {
  const target = "LINER";
  const guesses = ["CRANE", "SLOTH"];
  const options = ["AUDIO", "WACKY"];

  const [selectedGuess, setSelectedGuess] = useState(null);
  const otherGuess = options.find(word => word !== selectedGuess);

  const remaining = { AUDIO: 34, WACKY: 11 };

  const emptyRows = Array.from({ length: 4 }, () => Array(5).fill(null));

  const baseResult = [
    evaluateResult(target, "CRANE"),
    evaluateResult(target, "SLOTH"),
    ...emptyRows,
  ];

  const boardWithGuess = selectedGuess
    ? [
        evaluateResult(target, "CRANE"),
        evaluateResult(target, "SLOTH"),
        evaluateResult(target, selectedGuess),
        ...Array.from({ length: 3 }, () => Array(5).fill(null)),
      ]
    : baseResult;

  return (
    <section className="experiment">
      <h2>Experiment</h2>

      <p>Let's consider this scenario:</p>

      <p>
        You are in the middle of a <i>Wordle</i> game that currently looks like this:
      </p>

      <Board
        rows={6}
        cols={5}
        state={{
          ...initialState,
          guesses,
          currentGuess: "",
          result: baseResult,
        }}
      />

      <p>Which of the following two words would you choose for your next guess?</p>

      {!selectedGuess && (
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "4rem" }}>
          {options.map(word => (
            <button key={word} className="proceed-button" onClick={() => setSelectedGuess(word)}>
              {word}
            </button>
          ))}
        </div>
      )}

      {selectedGuess && (
        <>
          <p>
            Suppose you choose <b>{selectedGuess}</b>. If the hidden answer is{" "}
            <b>{target}</b>, Wordle would return the following pattern:
          </p>

          <Board
            rows={6}
            cols={5}
            state={{
              ...initialState,
              guesses: [...guesses, selectedGuess],
              currentGuess: "",
              result: boardWithGuess,
            }}
          />

          <p>
            After this guess, <b>{remaining[selectedGuess]}</b> possible answers would remain.
          </p>

          <p>Now consider the alternative.</p>

          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <button className="proceed-button" onClick={() => setSelectedGuess(otherGuess)}>
              Try {otherGuess}
            </button>
          </div>

          <p>
            <b>WACKY</b> leaves <b>{remaining.WACKY}</b> possible answers, while{" "}
            <b>AUDIO</b> leaves <b>{remaining.AUDIO}</b>.
          </p>

          <p>
            Even if every letter in <b>WACKY</b> comes back gray, it still provides more
            information because it rules out more possibilities.
          </p>

          <p>
            A good guess is not simply one that contains common letters. What matters is how
            effectively the guess separates the remaining possibilities into distinct outcomes.
          </p>

          <p>
            This is the central idea of information theory, and it leads naturally to the
            concept of entropy.
          </p>

          <button
            className="proceed-button"
            onClick={() => handleProceed(2)}
          >
            Proceed to Entropy
          </button>
        </>
      )}

    </section>
  );
}

export default Experiment;
