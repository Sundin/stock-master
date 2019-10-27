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

export function getStockDetails(id, basicData) {
  let stockDetails = getAllStocks()[id];

  if (basicData) {
    basicData.lastPrice = convertFromSEK(
      basicData.lastPrice,
      stockDetails.currency
    );
    stockDetails.priceSalesRatio = formatNumber(
      basicData.lastPrice / (stockDetails.revenue / stockDetails.numberOfShares)
    );
  }

  stockDetails.revenuePerEmployee = formatNumber(
    stockDetails.revenue / stockDetails.numberOfEmployees
  );

  stockDetails.revenuePerShare = formatNumber(
    stockDetails.revenue / stockDetails.numberOfShares
  );

  stockDetails.revenue = formatNumber(stockDetails.revenue);
  stockDetails.numberOfEmployees = formatNumber(stockDetails.numberOfEmployees);

  return stockDetails;
}

function formatNumber(number) {
  if (number >= BILLION) {
    return number.toPrecision(3) / BILLION + " miljarder";
  } else if (number >= MILLION) {
    return number.toPrecision(3) / MILLION + " miljoner";
  } else if (number >= THOUSAND) {
    return number.toPrecision(3) / THOUSAND + " 000";
  }

  return number.toPrecision(3);
}
