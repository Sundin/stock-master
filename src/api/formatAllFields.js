const { YEAR, BILLION, MILLION, THOUSAND } = require("../constants");

export function formatAllFields(inputData) {
  let stockDetails = { ...inputData };

  Object.keys(stockDetails).forEach(key => {
    if (keyShouldBeFormatted(key)) {
      stockDetails[key] = formatNumber(stockDetails[key]);
    }
  });

  return stockDetails;
}

function keyShouldBeFormatted(key) {
  switch (key) {
    case YEAR:
      return false;
    case "_id":
      return false;
    default:
      return true;
  }
}

function formatNumber(number) {
  if (isNaN(number) || typeof number !== "number") {
    return number;
  }

  let returnValue = "";
  const negative = number < 0;
  if (negative) {
    number = number * -1;
  }

  if (number >= BILLION) {
    returnValue = number.toPrecision(3) / BILLION + " miljarder";
  } else if (number >= MILLION) {
    returnValue = number.toPrecision(3) / MILLION + " miljoner";
  } else if (number >= THOUSAND) {
    returnValue = numberWithSpaces(number.toFixed(0));
  } else {
    returnValue = number.toPrecision(3).replace(".00e+3", " 000");
  }

  if (negative) {
    returnValue = "-" + returnValue;
  }

  return returnValue;
}

function numberWithSpaces(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
