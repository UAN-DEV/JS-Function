"use strict";

const LIST_OF_CHECKED_FUNCTONS
 = {
  number: (val) => (Number.isFinite(Number(val)) ? Number(val) : null),
  string: (val) => String(val),
  boolean: (val) => val === "true", // Сразу вернет true или false логического типа
  "number and <": (val, item) => (Number(val) < item.to ? Number(val) : null),
  "number and >": (val, item) => (Number(val) > item.from ? Number(val) : null),
  "number and <=": (val, item) => (Number(val) <= item.to ? Number(val) : null),
  "number and >=": (val, item) =>
    Number(val) >= item.from ? Number(val) : null,
  "<= number <=": (val, item) =>
    Number(val) >= item.from && Number(val) <= item.to ? Number(val) : null,
};

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
    const CHECK_FUNCTION = LIST_OF_CHECKED_FUNCTONS
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
