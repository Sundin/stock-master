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
  SOLIDITY
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
  let stockDetails = { ...getAllStocks()[id] };
  let basicData = { ...basicStockData };

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

    stockDetails.priceSalesRatio = formatNumber(
      basicData.lastPrice / (stockDetails.revenue / stockDetails.numberOfShares)
    );

    stockDetails[PRICE_BOOK_VALUE] = formatNumber(
      basicData.lastPrice /
        (stockDetails[TOTAL_EQUITY] / stockDetails[NUMBER_OF_SHARES])
    );
  }

  stockDetails[SOLIDITY] = formatNumber(
    (stockDetails[TOTAL_EQUITY] / stockDetails[TOTAL_ASSETS]) * 100
  );

  stockDetails[EARNINGS_PER_SHARE] = formatNumber(
    stockDetails[NET_EARNINGS] / stockDetails[NUMBER_OF_SHARES]
  );

  // Rörelsemarginal:
  stockDetails.operatingMargin = formatNumber(
    (stockDetails.earningsBeforeInterestAndTax / stockDetails.revenue) * 100
  );

  stockDetails.revenuePerEmployee = formatNumber(
    stockDetails.revenue / stockDetails.numberOfEmployees
  );

  stockDetails.revenuePerShare = formatNumber(
    stockDetails.revenue / stockDetails.numberOfShares
  );

  stockDetails.revenue = formatNumber(stockDetails.revenue);
  stockDetails.numberOfEmployees = formatNumber(stockDetails.numberOfEmployees);
  stockDetails[TOTAL_DEBT] = formatNumber(stockDetails[TOTAL_DEBT]);
  stockDetails[TOTAL_EQUITY] = formatNumber(stockDetails[TOTAL_EQUITY]);
  if (stockDetails.totalAssets) {
    stockDetails.totalAssets = formatNumber(stockDetails.totalAssets);
  }

  return stockDetails;
}

function formatNumber(number) {
  if (isNaN(number)) {
    return "";
  }
  if (number >= BILLION) {
    return number.toPrecision(3) / BILLION + " miljarder";
  } else if (number >= MILLION) {
    return number.toPrecision(3) / MILLION + " miljoner";
  } else if (number >= THOUSAND) {
    return number.toPrecision(3) / THOUSAND + " 000";
  }

  return number.toPrecision(3);
}
