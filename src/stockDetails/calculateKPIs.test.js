import {
  calculateKPIs,
  calculateEquityDebtAndAssets,
  calculateKPIsFromBasicData,
  calculateSolidity,
  calculateEarningsPerShare,
  calculateOperatingMargin,
  calculateRevenuePerEmployee,
  calculateRevenuePerShare
} from "./calculateKPIs";

it("calculateKPIs should not modify input data", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    solidity: 4,
    numberOfShares: 100
  };
  const inputBasicData = {
    id: "1234",
    currency: "SEK",
    lastPrice: 5,
    priceEarningsRatio: 3
  };

  calculateKPIs(inputData, inputBasicData);

  expect(inputData).toEqual(inputData);
  expect(inputBasicData).toEqual(inputBasicData);
});

it("it should be possible to calculate debt from assets and equity if it's missing", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    totalAssets: 100,
    totalEquity: 50
  };

  const expectedResult = {
    id: "1234",
    currency: "SEK",
    totalAssets: 100,
    totalEquity: 50,
    totalDebt: 50
  };

  expect(calculateEquityDebtAndAssets(inputData, {})).toEqual(expectedResult);
});

it("it should be possible to calculate assets from debt and equity if it's missing", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    totalDebt: 50,
    totalEquity: 50
  };

  const expectedResult = {
    id: "1234",
    currency: "SEK",
    totalAssets: 100,
    totalEquity: 50,
    totalDebt: 50
  };

  expect(calculateEquityDebtAndAssets(inputData, {})).toEqual(expectedResult);
});

it("it should be possible to calculate equity from debt and assets if it's missing", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    totalDebt: 50,
    totalAssets: 100
  };

  const expectedResult = {
    id: "1234",
    currency: "SEK",
    totalAssets: 100,
    totalEquity: 50,
    totalDebt: 50
  };

  expect(calculateEquityDebtAndAssets(inputData, {})).toEqual(expectedResult);
});

// TODO: better error handling for this
it("an error should be shown if debt, assets and equity don't add up", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    totalDebt: 50,
    totalAssets: 100,
    totalEquity: 999
  };

  const expectedResult = {
    id: "1234",
    currency: "SEK",
    totalAssets: "FEL",
    totalEquity: "FEL",
    totalDebt: "FEL"
  };

  expect(calculateEquityDebtAndAssets(inputData, {})).toEqual(expectedResult);
});

it("calculateKPIsFromBasicData", () => {
  const inputData = {
    id: "1234",
    currency: "SEK",
    numberOfShares: 1000,
    revenue: 500,
    totalEquity: 100
  };

  const inputBasicData = {
    lastPrice: 10,
    currency: "SEK"
  };

  const expectedResult = {
    id: "1234",
    currency: "SEK",
    priceSalesRatio: 20,
    priceBookValue: 100,
    marketCap: 10000,
    numberOfShares: 1000,
    revenue: 500,
    totalEquity: 100
  };

  expect(calculateKPIsFromBasicData(inputData, inputBasicData)).toEqual(
    expectedResult
  );
});

it("calculateSolidity", () => {
  const inputData = {
    totalEquity: 100,
    totalAssets: 500
  };

  const expectedResult = 20;

  expect(calculateSolidity(inputData)).toEqual(expectedResult);
});

it("calculateEarningsPerShare", () => {
  const inputData = {
    netEarnings: 100,
    numberOfShares: 10
  };

  const expectedResult = 10;

  expect(calculateEarningsPerShare(inputData)).toEqual(expectedResult);
});

it("calculateOperatingMargin", () => {
  const inputData = {
    revenue: 100,
    earningsBeforeInterestAndTax: 10
  };

  const expectedResult = 10;

  expect(calculateOperatingMargin(inputData)).toEqual(expectedResult);
});

it("calculateRevenuePerEmployee", () => {
  const inputData = {
    revenue: 100,
    numberOfEmployees: 20
  };

  const expectedResult = 5;

  expect(calculateRevenuePerEmployee(inputData)).toEqual(expectedResult);
});

it("calculateRevenuePerShare", () => {
  const inputData = {
    revenue: 100,
    numberOfShares: 20
  };

  const expectedResult = 5;

  expect(calculateRevenuePerShare(inputData)).toEqual(expectedResult);
});
