"use strict";

/**
 * Calculates when the father is twice as old as the son
 * @param {number} ageSon - son age
 * @param {number} ageFather - father age
 * @returns {string} In how many years the father will be (or was) twice as old the son, or there an incorrect age values
 */
function isFatherTwofoldOlder(ageSon, ageFather) {
  let massage = "Your have entered incorrect age values";
  switch (true) {
    case ageSon < 0 || ageFather - ageSon < 15:
      massage = "Your have entered incorrect age values";
      break;
    case ageFather / ageSon === 2:
      massage = "The father is twice as old as his son.";
      break;
    case 2 * ageSon > ageFather:
      massage = `The father was twice as old as his son ${ageSon * 2 - ageFather} years ago.`;
      break;
      default:
      massage = `The father will be twice as old as his son in ${ageFather - ageSon * 2} years.`;
  }
  return massage;
}

do {
  let ages = prompt("Input age son and father, separated by space:")
    .split(" ")
    .filter((age) => Number(age.trim()));

  if (ages.length === 2) {
    alert(isFatherTwofoldOlder(...ages));
    break;
  }
} while (confirm("Your incorrect enter numbers. Continue?"));
