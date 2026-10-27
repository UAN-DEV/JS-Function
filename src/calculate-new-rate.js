"use strict";

/**
 * Calculate new rate winner of competition.
 *
 * @param {number} WINNER_RATE - Rate of winner (must be >= 0).
 * @param {number} LOSER_RATE - Rate of loser (must be >= 0).
 * @returns {number} New rate of winner, rounded to 1 decimal place.
 */
export function calculateRate(arg) {
  const [WINNER_RATE, LOSER_RATE] = arg;
  if (WINNER_RATE === 0) return LOSER_RATE;
  if (LOSER_RATE === 0) return WINNER_RATE;
  if (WINNER_RATE - LOSER_RATE < 0)
    return WINNER_RATE + (LOSER_RATE - WINNER_RATE + 5) / 3;
  if (WINNER_RATE - LOSER_RATE <= 2) return WINNER_RATE + 2;
  if (WINNER_RATE - LOSER_RATE < 20) return ++WINNER_RATE;
  return WINNER_RATE;
}
