import fs from "fs"
import ALL_WORDS from "../src/data/allWords.js"
import { expectedInformation } from "../src/logic/wordle.js"

const baseExpectedInfo = {}
for(const word of ALL_WORDS) {
  baseExpectedInfo[word] = expectedInformation(word, ALL_WORDS)
}

const output = JSON.stringify(baseExpectedInfo, null, 2)

fs.writeFileSync("../src/data/baseExpectedInfo.js", output)
