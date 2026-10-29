"use strict";

/**
 * Calculate new rate winner of competition.
 *
 * @param {number} WINNER_RATE - Rate of winner (must be >= 0).
 * @param {number} LOSER_RATE - Rate of loser (must be >= 0).
 * @returns {number} New rate of winner, rounded to 1 decimal place.
 */
export function calculateRate(arg) {
  const [{ value: WINNER_RATE }, { value: LOSER_RATE }] = arg;
  return WINNER_RATE === 0
    ? LOSER_RATE
    : LOSER_RATE === 0
      ? WINNER_RATE
      : WINNER_RATE < LOSER_RATE 
        ? WINNER_RATE + (LOSER_RATE - WINNER_RATE + 5) / 3
        : WINNER_RATE - LOSER_RATE <= 2
          ? WINNER_RATE + 2
          : WINNER_RATE - LOSER_RATE < 20
            ? ++WINNER_RATE
            : WINNER_RATE;
}
