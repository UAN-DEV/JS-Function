"use strict";

/**
 * Validation of input values ​​against the provided configuration
 *
 * @param {array} arrTypesAndNames - Array of objects with the names and types of the required values
 * @returns {array} Array with valid data
 */
export function inputCorrectTypeValue(
  arrTypesAndNames = [{ nameValue: "num1", typeValue: "number > 0" }],
) {
  const arrValue = arrTypesAndNames.map((item) => {
    while (true) {
      const INN_VALUE = prompt(
        `Enter <${item.nameValue.toUpperCase()}> (must be a ${item.typeValue}):`,
      );
      let retValue = [];
      switch (item.typeValue) {
        case "number":
          if (Number.isFinite(Number(INN_VALUE))) {
            return Number(INN_VALUE);
          }
          break;
        case "string":
          return String(INN_VALUE);
          break;
        case "number > 0":
        case "number> 0":
        case "number>0":
          if (Number(INN_VALUE) > 0) return Number(INN_VALUE);
          break;
        case "number < 0":
        case "number< 0":
        case "number<0":
          if (Number(INN_VALUE) < 0) return Number(INN_VALUE);
          break;
        case "number >= 0":
        case "number>= 0":
        case "number >=0":
        case "number>=0":
          if (Number(INN_VALUE) >= 0) return Number(INN_VALUE);
          break;
        case "number <= 0":
        case "number<= 0":
        case "number <=0":
        case "number<=0":
          if (Number(INN_VALUE) <= 0) return Number(INN_VALUE);
          break;
        default:
          return INN_VALUE === "true" ? "true" : "false";
      }
      if (retValue.length) {
        break;
      } else {
        alert(`Your enter incorrect value, it must be a ${item.typeValue}`);
      }
    }
  });

  return arrValue;
}

/* 
const FOR_EXAMPLE1 = [
  {
    nameValue: "name user",
    typeValue: "string",
  },
  {
    nameValue: "age user",
    typeValue: "number > 0",
  },
  {
    nameValue: "male",
    typeValue: "boolean",
  },
];

const FOR_EXAMPLE2 = [
  {
    nameValue: "rate winner",
    typeValue: "number",
  },
  {
    nameValue: "rate loser",
    typeValue: "number",
  },
 ];

 */
