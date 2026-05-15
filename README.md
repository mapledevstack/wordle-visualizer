# Wordle Visualizer

A React application that narrows down possible Wordle answers from user-entered guesses and feedback, and recommends optimal next guesses using entropy-based analysis from information theory.

## Features

- Interactive Wordle board for entering guesses and feedback
- Automatic filtering of valid candidate words
- Entropy calculation for every possible guess
- Ranking of guesses by expected information gain
- Real-time updates after each move

## Algorithm Overview

The solver models Wordle as an information optimization problem.

For each potential guess, the application simulates every possible feedback pattern against the remaining candidate words. It then computes the expected information gain using Shannon entropy.

Guesses with higher entropy are expected to reduce the search space more effectively, making them stronger choices on average.

## Tech Stack

- React
- JavaScript
- Vite

## Getting Started

```bash
npm install
npm run dev
```
