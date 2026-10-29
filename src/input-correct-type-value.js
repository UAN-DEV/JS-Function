"use strict";
import {LIST_OF_CHECKED_FUNCTIONS} from './list-of-checked-function.js'

/**
 * Validation of input values ​​against the provided configuration
 *
 * @param {Array<{nameValue: string, typeValue: string, from?: number, to?: number}>} arrTypesAndNames - Array of objects with the names, types and propertys of the required values
 * @returns {Array<{nameValue: string, value: any}>} - Array of objects with valid values
 */
export function inputCorrectTypeValue(
  arrTypesAndNames = [
    { nameValue: "num1", typeValue: "number and >=", from: 0 },
  ],
) {
  return arrTypesAndNames.map((item) => {
    const CHECK_FUNCTION = LIST_OF_CHECKED_FUNCTIONS
    [item.typeValue];
    if (!CHECK_FUNCTION) return { nameValue: item.nameValue, value: undefined };
    const MESSAGE =
      item.typeValue === "<= number <="
        ? `${item.from ?? ""} ${item.typeValue} ${item.to ?? ""}`.trim()
        : `${item.typeValue} ${item.to ?? ""} ${item.from ?? ""}`.trim();

    const FULL_MESSAGE = `Enter <${item.nameValue.toUpperCase()}> (must be a ${MESSAGE})`;

    while (true) {
      const INPUT_DATA = prompt(FULL_MESSAGE);
      const CHECKED_VALUE = CHECK_FUNCTION(INPUT_DATA, item);

      if (CHECKED_VALUE !== null) return { nameValue: item.nameValue, value: CHECKED_VALUE };
      alert(`Value must be a ${MESSAGE}`);
    }
  });
}
