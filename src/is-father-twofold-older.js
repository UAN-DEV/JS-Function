"use strict";

/**
 * Calculates when the father is twice as old as the son.
 *
 * @param {number} AGE_SON - son age (must be >= 0).
 * @param {number} AGE_FATHER - father age (must be >= 15).
 * @returns {string} In how many years the father will be (or was) twice as old the son.
 */
export function isFatherTwofoldOlder(arg) {
  const [{ value: AGE_SON }, { value: AGE_FATHER }] = arg;
  if (AGE_FATHER - AGE_SON < 15) return "You have entered invalid age values (the father must be at least 15 years older than the son).";
  if (AGE_FATHER === 2 * AGE_SON) return "The father is twice as old as his son.";
  return AGE_FATHER < 2 * AGE_SON
    ? `The father was twice as old as his son ${2 * AGE_SON - AGE_FATHER} years ago.`
    : `The father will be twice as old as his son in ${AGE_FATHER - 2 * AGE_SON} years.`;
}
