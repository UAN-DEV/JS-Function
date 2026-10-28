"use strict";

/**
 * Validation of input values ​​against the provided configuration
 *
 * @param {array of objects} arrTypesAndNames - Array of objects with the names, types and propertys of the required values
 * @returns {array of objects} Array of objects with valid values
 */
export function inputCorrectTypeValue(
  arrTypesAndNames = [
    { nameValue: "num1", typeValue: "number and >=", from: 0 },
  ],
) {
  const arrValue = arrTypesAndNames.map((item) => {
    while (true) {
      let message1 = `Enter <${item.nameValue.toUpperCase()}> (must be a `;
      let message2 =
        item.typeValue === "<= number <="
          ? `${item.from ?? ""} ${item.typeValue} ${item.to ?? ""}`
          : `${item.typeValue} ${item.to ?? ""} ${item.from ?? ""}`;

      const INN_VALUE = prompt(`${message1} ${message2})`);
      switch (item.typeValue) {
        case "number":
          if (Number.isFinite(Number(INN_VALUE))) {
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          }
          break;
        case "string":
          return { nameValue: item.nameValue, value: String(INN_VALUE) };
        case "boolean":
          return {
            nameValue: item.nameValue,
            value: Boolean(INN_VALUE === "true" ? true : false),
          };
        case "number and <":
          if (Number(INN_VALUE) < item.to)
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          break;
        case "number and >":
          if (Number(INN_VALUE) > item.from)
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          break;
        case "number and <=":
          if (Number(INN_VALUE) <= item.to)
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          break;
        case "number and >=":
          if (Number(INN_VALUE) >= item.from)
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          break;
        case "<= number <=":
          if (Number(INN_VALUE) >= item.from && Number(INN_VALUE) <= item.to)
            return { nameValue: item.nameValue, value: Number(INN_VALUE) };
          break;
        default:
          return;
      }
      alert(`Value must be a ${message2}`);
    }
  });

  return arrValue;
}
