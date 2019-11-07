import {
  exchangeRates,
  EARNINGS_PER_SHARE,
  NET_EARNINGS,
  NUMBER_OF_SHARES,
  PRICE_BOOK_VALUE,
  TOTAL_EQUITY,
  TOTAL_DEBT,
  TOTAL_ASSETS,
  SOLIDITY,
  MARKET_CAP
} from "../constants";

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

export function calculateKPIs(inputData, inputBasicData) {
  let stockDetails = { ...inputData };
  let basicData = { ...inputBasicData };

  stockDetails = calculateEquityDebtAndAssets(stockDetails);

  stockDetails = calculateKPIsFromBasicData(stockDetails, basicData);

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

export function calculateKPIsFromBasicData(inputData, inputBasicData) {
  let stockDetails = { ...inputData };
  let basicData = { ...inputBasicData };

  if (!basicData) {
    return stockDetails;
  }

  basicData.lastPrice = convertFromSEK(
    basicData.lastPrice,
    stockDetails.currency
  );

  stockDetails.priceSalesRatio =
    basicData.lastPrice / (stockDetails.revenue / stockDetails.numberOfShares);

  stockDetails[PRICE_BOOK_VALUE] =
    basicData.lastPrice /
    (stockDetails[TOTAL_EQUITY] / stockDetails[NUMBER_OF_SHARES]);

  stockDetails[MARKET_CAP] =
    stockDetails[NUMBER_OF_SHARES] * basicData.lastPrice;

  return stockDetails;
}

export function calculateEquityDebtAndAssets(inputData) {
  let stockDetails = { ...inputData };

  if (!stockDetails[TOTAL_DEBT]) {
    stockDetails[TOTAL_DEBT] =
      stockDetails[TOTAL_ASSETS] - stockDetails[TOTAL_EQUITY];
  } else if (!stockDetails[TOTAL_EQUITY]) {
    stockDetails[TOTAL_EQUITY] =
      stockDetails[TOTAL_ASSETS] - stockDetails[TOTAL_DEBT];
  } else if (!stockDetails[TOTAL_ASSETS]) {
    stockDetails[TOTAL_ASSETS] =
      stockDetails[TOTAL_EQUITY] + stockDetails[TOTAL_DEBT];
  }

  if (
    stockDetails[TOTAL_DEBT] &&
    stockDetails[TOTAL_EQUITY] &&
    stockDetails[TOTAL_ASSETS]
  ) {
    if (
      stockDetails[TOTAL_EQUITY] !==
      stockDetails[TOTAL_ASSETS] - stockDetails[TOTAL_DEBT]
    ) {
      stockDetails[TOTAL_DEBT] = "FEL";
      stockDetails[TOTAL_EQUITY] = "FEL";
      stockDetails[TOTAL_ASSETS] = "FEL";
    }
  }

  return stockDetails;
}
