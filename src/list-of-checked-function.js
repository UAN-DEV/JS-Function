"use strict";

export const LIST_OF_CHECKED_FUNCTIONS
 = {
  number: (val) => (Number.isFinite(Number(val)) ? Number(val) : null),
  string: (val) => String(val),
  boolean: (val) => val === "true", // Сразу вернет true или false логического типа
  "number and <": (val, item) => (Number(val) < item.to ? Number(val) : null),
  "number and >": (val, item) => (Number(val) > item.from ? Number(val) : null),
  "number and <=": (val, item) => (Number(val) <= item.to ? Number(val) : null),
  "number and >=": (val, item) => (Number(val) >= item.from ? Number(val) : null),
  "<= number <=": (val, item) => (Number(val) >= item.from && Number(val) <= item.to ? Number(val) : null),
};
