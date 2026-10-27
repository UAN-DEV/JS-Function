"use strict";

/**
 * Calculates when the father is twice as old as the son.
 *
 * @param {number} AGE_SON - son age (must be >= 0).
 * @param {number} AGE_FATHER - father age (must be >= 15).
 * @returns {string} In how many years the father will be (or was) twice as old the son.
 */
export function isFatherTwofoldOlder(arg) {
  const [AGE_SON, AGE_FATHER] = arg;
  let massage = "Your have entered incorrect age!";
  switch (true) {
    case AGE_SON < 0 || AGE_FATHER - AGE_SON < 15:
      massage = "Your have entered incorrect age values";
      break;
    case AGE_FATHER / AGE_SON === 2:
      massage = "The father is twice as old as his son.";
      break;
    case 2 * AGE_SON > AGE_FATHER:
      massage = `The father was twice as old as his son ${AGE_SON * 2 - AGE_FATHER} years ago.`;
      break;
    default:
      massage = `The father will be twice as old as his son in ${AGE_FATHER - AGE_SON * 2} years.`;
  }
  return massage;
}
