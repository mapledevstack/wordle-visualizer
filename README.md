# Wordle React Visualizer

A modern React-based tool for learning and applying information-driven Wordle strategy.

This website combines an interactive Wordle board with a guided explanation section. It helps users understand how to choose strong guesses using information theory, then lets them apply that reasoning directly in the game.

## Key Features

- Guided explanation mode with progressive instruction on Wordle strategy
- Educational pages covering the game logic, entropy, and expected information
- Full interactive Wordle board with keyboard input support
- Automatic candidate filtering based on guess feedback
- Searchable visualizer with live filtering and sort reversal
- Expected information scoring for each candidate guess
- Responsive light/dark theme support
- Internal scrolling for the visualizer list so the search controls remain fixed
- Clear feedback colors and information indicators for each guess

## How It Works

The app treats Wordle as an information optimization problem:

1. Track the current set of remaining candidate words after each guess.
2. For every possible next guess, simulate the feedback pattern it would produce against each candidate.
3. Group candidate words by feedback pattern and measure how much each pattern reduces the search space.
4. Calculate the expected information gain using Shannon entropy across all possible outcomes.
5. Rank candidate guesses by expected information so the most informative words appear first.

This means the application does not simply choose the most common letters. Instead, it chooses guesses that are expected to split the remaining possibilities most effectively.

## Project Structure

- `src/App.jsx` — main application shell, mode selection, and theme handling
- `src/components/Wordle.jsx` — primary Wordle game screen and state management
- `src/components/Board.jsx` — Wordle board rendering and colored feedback display
- `src/components/Visualizer.jsx` — candidate word list, search filter, and sort controls
- `src/components/Header.jsx` — light/dark theme toggle and mode navigation
- `src/components/explanation/` — educational content and step-by-step explanation pages
- `src/styles/` — component and layout styles for the app
- `src/logic/` — Wordle logic, entropy calculation, guess validation, and reducer state updates
- `src/data/` — word lists and precomputed base expected information values

## Installation

Make sure you have Node.js installed, then run:

```bash
npm install
```

## Running Locally

Start the development server with:

```bash
npm run dev
```

Open the local URL shown in the terminal to use the app.

## Notes

- Use the mode switch in the header to toggle between the educational explanation pages and the interactive Wordle board.
- The explanation flow includes step-by-step sections on the game, experiments, entropy, and expected information.
- The visualizer includes a search box that filters candidate words as you type and a button to reverse sort order.
- The light/dark theme toggle adjusts the app appearance for both the explanation and Wordle screens.

## Development

- The app uses Vite for fast development and build performance.
- Styles are implemented with CSS modules in the `src/styles` folder.
- The Wordle state is managed with a reducer for predictable game updates.
