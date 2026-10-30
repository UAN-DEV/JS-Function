"use strict";

/**
 * Round number to precision
 *
 * @param {number} num - Number
 * @param {number} precision - Precision (must be integer, between 0 and 100).
 * @returns
 */
export function roundToPrecision(num, precision = 0) {
  return precision
    ? Math.round(num * 10 * precision) / (10 * precision)
    : Math.round(num);
}
