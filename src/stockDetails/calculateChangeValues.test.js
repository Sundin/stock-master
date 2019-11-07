import { calculateChange } from "./calculateChangeValues";

it("calculateChange should ignore non-KPI fields", () => {
  const report = {
    id: "1234",
    year: 2018,
    currency: "USD"
  };

  const previousReport = {
    id: "1234",
    year: 2018,
    currency: "USD"
  };

  const expectedResult = {};
  expect(calculateChange(report, previousReport)).toEqual(expectedResult);
});

it("calculateChange when nothing changed", () => {
  const report = {
    earningsBeforeInterestAndTax: 100,
    earningsPerShare: 100,
    marketCap: 100,
    netEarnings: 100,
    numberOfEmployees: 100,
    numberOfShares: 100,
    operatingMargin: 100,
    priceBookValue: 100,
    priceSalesRatio: 100,
    revenue: 100,
    revenuePerEmployee: 100,
    revenuePerShare: 100,
    solidity: 100,
    totalAssets: 100,
    totalDebt: 100,
    totalEquity: 100
  };

  const previousReport = {
    earningsBeforeInterestAndTax: 100,
    earningsPerShare: 100,
    marketCap: 100,
    netEarnings: 100,
    numberOfEmployees: 100,
    numberOfShares: 100,
    operatingMargin: 100,
    priceBookValue: 100,
    priceSalesRatio: 100,
    revenue: 100,
    revenuePerEmployee: 100,
    revenuePerShare: 100,
    solidity: 100,
    totalAssets: 100,
    totalDebt: 100,
    totalEquity: 100
  };

  const expectedResult = {
    earningsBeforeInterestAndTax: "0.00",
    earningsPerShare: "0.00",
    marketCap: "0.00",
    netEarnings: "0.00",
    numberOfEmployees: "0.00",
    numberOfShares: "0.00",
    operatingMargin: "0.00",
    priceBookValue: "0.00",
    priceSalesRatio: "0.00",
    revenue: "0.00",
    revenuePerEmployee: "0.00",
    revenuePerShare: "0.00",
    solidity: "0.00",
    totalAssets: "0.00",
    totalDebt: "0.00",
    totalEquity: "0.00"
  };
  expect(calculateChange(report, previousReport)).toEqual(expectedResult);
});

it("calculateChange should work when KPIs increased", () => {
  const report = {
    earningsBeforeInterestAndTax: 200,
    earningsPerShare: 150,
    marketCap: 110
  };

  const previousReport = {
    earningsBeforeInterestAndTax: 100,
    earningsPerShare: 100,
    marketCap: 100
  };

  const expectedResult = {
    earningsBeforeInterestAndTax: "100.00",
    earningsPerShare: "50.00",
    marketCap: "10.00"
  };
  expect(calculateChange(report, previousReport)).toEqual(expectedResult);
});

it("calculateChange should work when KPIs decreased", () => {
  const report = {
    earningsBeforeInterestAndTax: 100,
    earningsPerShare: 100,
    marketCap: 100
  };

  const previousReport = {
    earningsBeforeInterestAndTax: 200,
    earningsPerShare: 150,
    marketCap: 110
  };

  const expectedResult = {
    earningsBeforeInterestAndTax: "-50.00",
    earningsPerShare: "-33.33",
    marketCap: "-9.09"
  };
  expect(calculateChange(report, previousReport)).toEqual(expectedResult);
});
