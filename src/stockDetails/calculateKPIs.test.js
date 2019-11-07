import { calculateKPIs, calculateEquityDebtAndAssets } from "./calculateKPIs";

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
