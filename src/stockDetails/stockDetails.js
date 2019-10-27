import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";
import generalDynamics from "./stocks/generalDynamics";
import { exchangeRates, THOUSAND, MILLION, BILLION } from "../constants";

function getAllStocks() {
  let stocks = {};
  stocks[raytheon.id] = raytheon;
  stocks[northrupGrumman.id] = northrupGrumman;
  stocks[generalDynamics.id] = generalDynamics;
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

  if (basicData) {
    basicData.lastPrice = convertFromSEK(
      basicData.lastPrice,
      stockDetails.currency
    );
    stockDetails.priceSalesRatio = formatNumber(
      basicData.lastPrice / (stockDetails.revenue / stockDetails.numberOfShares)
    );
  }

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
