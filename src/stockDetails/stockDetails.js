import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";
import generalDynamics from "./stocks/generalDynamics";
import lockheedMartin from "./stocks/lockheedMartin";
import {
  exchangeRates,
  THOUSAND,
  MILLION,
  BILLION,
  EARNINGS_PER_SHARE,
  NET_EARNINGS,
  NUMBER_OF_SHARES,
  PRICE_BOOK_VALUE,
  TOTAL_EQUITY,
  TOTAL_DEBT,
  TOTAL_ASSETS,
  SOLIDITY,
  MARKET_CAP,
  YEAR
} from "../constants";

function getAllStocks() {
  let stocks = {};
  stocks[raytheon.id] = raytheon;
  stocks[northrupGrumman.id] = northrupGrumman;
  stocks[generalDynamics.id] = generalDynamics;
  stocks[lockheedMartin.id] = lockheedMartin;
  return stocks;
}

// TODO: Get currency exchange rates from some API
function convertFromSEK(amount, currency) {
  switch (currency) {
    case "SEK":
      return amount;
    case "USD":
      return amount / exchangeRates.USD;
    case "DKK":
      return amount / exchangeRates.DKK;
    default:
      console.error("Missing currency: " + currency);
      return amount;
  }
}

export function getStockDetails(id, basicStockData) {
  let stockDetails = {
    ...getAllStocks()[id]
  };
  let basicData = { ...basicStockData };

  // TODO: sort reports

  if (stockDetails.annualReports) {
    stockDetails.annualReports = stockDetails.annualReports
      .map(report => calculateKPIs(report, basicData))
      .map(report => formatAllFields(report));
  }

  if (stockDetails.interimReports) {
    stockDetails.interimReports = stockDetails.interimReports
      .map(report => calculateKPIs(report, basicData))
      .map(report => formatAllFields(report));
  }

  const latestReport = stockDetails.annualReports
    ? stockDetails.annualReports[0]
    : {};

  stockDetails = {
    ...stockDetails,
    ...latestReport
  };

  return stockDetails;
}

function calculateKPIs(inputData, inputBasicData) {
  let stockDetails = { ...inputData };
  let basicData = { ...inputBasicData };
  if (!stockDetails[TOTAL_DEBT]) {
    stockDetails[TOTAL_DEBT] =
      stockDetails[TOTAL_ASSETS] - stockDetails[TOTAL_EQUITY];
  } else if (!stockDetails[TOTAL_EQUITY]) {
    stockDetails[TOTAL_EQUITY] =
      stockDetails[TOTAL_ASSETS] - stockDetails[TOTAL_DEBT];
  }

  if (basicData) {
    basicData.lastPrice = convertFromSEK(
      basicData.lastPrice,
      stockDetails.currency
    );

    stockDetails.priceSalesRatio =
      basicData.lastPrice /
      (stockDetails.revenue / stockDetails.numberOfShares);

    stockDetails[PRICE_BOOK_VALUE] =
      basicData.lastPrice /
      (stockDetails[TOTAL_EQUITY] / stockDetails[NUMBER_OF_SHARES]);

    stockDetails[MARKET_CAP] =
      stockDetails[NUMBER_OF_SHARES] * basicData.lastPrice;
  }

  stockDetails[SOLIDITY] =
    (stockDetails[TOTAL_EQUITY] / stockDetails[TOTAL_ASSETS]) * 100;

  stockDetails[EARNINGS_PER_SHARE] =
    stockDetails[NET_EARNINGS] / stockDetails[NUMBER_OF_SHARES];

  // Rörelsemarginal:
  stockDetails.operatingMargin =
    (stockDetails.earningsBeforeInterestAndTax / stockDetails.revenue) * 100;

  stockDetails.revenuePerEmployee =
    stockDetails.revenue / stockDetails.numberOfEmployees;

  stockDetails.revenuePerShare =
    stockDetails.revenue / stockDetails.numberOfShares;

  return stockDetails;
}

export function formatAllFields(inputData) {
  let stockDetails = { ...inputData };

  Object.keys(stockDetails).forEach(key => {
    if (typeof key !== "undefined" && keyShouldBeFormatted(key)) {
      stockDetails[key] = formatNumber(stockDetails[key]);
    }
  });

  return stockDetails;
}

function keyShouldBeFormatted(key) {
  switch (key) {
    case YEAR:
      return false;
    default:
      return true;
  }
}

function formatNumber(number) {
  if (isNaN(number) || typeof number === "string") {
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
