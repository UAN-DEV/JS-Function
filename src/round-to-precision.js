"use strict";

/**
 * Round number to precision
 *
 * @param {number} num - Number
 * @param {number} precision - Precision (must be integer, between 0 and 100).
 * @returns
 */
export function roundToPrecision(num, precision = 0) {
  const NUM_OF_PRECISION = num.toFixed(precision);
  return num - NUM_OF_PRECISION === 0 ? num : NUM_OF_PRECISION;
}
