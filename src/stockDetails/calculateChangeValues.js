import { YEAR } from "../constants";

export function calculateChange(report, previousReport) {
  let changeValues = {};
  Object.keys(report).forEach(key => {
    if (changeShouldBeCalculated(key, report[key])) {
      changeValues[key] = (
        (report[key] / previousReport[key]) * 100 -
        100
      ).toFixed(2);
    }
  });

  return changeValues;
}

function changeShouldBeCalculated(key, value) {
  if (
    typeof key === "undefined" ||
    typeof value === "undefined" ||
    typeof value !== "number"
  ) {
    return false;
  }
  switch (key) {
    case YEAR:
      return false;
    default:
      return true;
  }
}
