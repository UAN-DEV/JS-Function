"use strict";

import { inputCorrectTypeValue } from "./input-correct-type-value.js";
import { isFatherTwofoldOlder } from "./is-father-twofold-older.js";
import { calculateRate } from "./calculate-new-rate.js";
import { roundToPrecision } from "./round-to-precision.js";

// 1) Calculates when the father is twice as old as the son
alert("Task #1) Calculates when the father is twice as old as the son");
const DATA_TO_FATHER_TWOFOLD = inputCorrectTypeValue([
  {
    nameValue: "age of son",
    typeValue: "number >= 0",
  },
  {
    nameValue: "age of father",
    typeValue: "number > 0",
  },
]);

alert(`Task #1
  ${isFatherTwofoldOlder(DATA_TO_FATHER_TWOFOLD)}`);

// 2) Calculate new rate winner of competition
alert("Task #2) Calculate new rate winner of competition");
const DATA_TO_NEW_RATE = inputCorrectTypeValue([
  {
    nameValue: "rate winner",
    typeValue: "number >= 0",
  },
  {
    nameValue: "rate loser",
    typeValue: "number >= 0",
  },
]);

alert(`Task #2
     ${roundToPrecision(calculateRate(DATA_TO_NEW_RATE), 1)}`);
