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
  MARKET_CAP,
  PRICE_SALES_RATIO,
  LAST_PRICE,
  CURRENCY,
  REVENUE,
  OPERATING_MARGIN,
  NUMBER_OF_EMPLOYEES,
  REVENUE_PER_EMPLOYEE,
  REVENUE_PER_SHARE,
  EBIT
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

  stockDetails[SOLIDITY] = calculateSolidity(stockDetails);
  stockDetails[EARNINGS_PER_SHARE] = calculateEarningsPerShare(stockDetails);
  stockDetails[OPERATING_MARGIN] = calculateOperatingMargin(stockDetails);
  stockDetails[REVENUE_PER_EMPLOYEE] = calculateRevenuePerEmployee(
    stockDetails
  );
  stockDetails[REVENUE_PER_SHARE] = calculateRevenuePerShare(stockDetails);

  return stockDetails;
}

export function calculateSolidity(stockDetails) {
  return (stockDetails[TOTAL_EQUITY] / stockDetails[TOTAL_ASSETS]) * 100;
}

export function calculateEarningsPerShare(stockDetails) {
  return stockDetails[NET_EARNINGS] / stockDetails[NUMBER_OF_SHARES];
}

// Rörelsemarginal:
export function calculateOperatingMargin(stockDetails) {
  return (stockDetails[EBIT] / stockDetails[REVENUE]) * 100;
}

export function calculateRevenuePerEmployee(stockDetails) {
  return stockDetails[REVENUE] / stockDetails[NUMBER_OF_EMPLOYEES];
}

export function calculateRevenuePerShare(stockDetails) {
  return stockDetails[REVENUE] / stockDetails[NUMBER_OF_SHARES];
}

export function calculateKPIsFromBasicData(inputData, inputBasicData) {
  let stockDetails = { ...inputData };
  let basicData = { ...inputBasicData };

  if (!basicData) {
    return stockDetails;
  }

  basicData[LAST_PRICE] = convertFromSEK(
    basicData[LAST_PRICE],
    stockDetails[CURRENCY]
  );

  stockDetails[PRICE_SALES_RATIO] =
    basicData[LAST_PRICE] /
    (stockDetails[REVENUE] / stockDetails[NUMBER_OF_SHARES]);

  stockDetails[PRICE_BOOK_VALUE] =
    basicData[LAST_PRICE] /
    (stockDetails[TOTAL_EQUITY] / stockDetails[NUMBER_OF_SHARES]);

  stockDetails[MARKET_CAP] =
    stockDetails[NUMBER_OF_SHARES] * basicData[LAST_PRICE];

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
