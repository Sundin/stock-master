import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood,
  peIsVeryBad,
  volatilityIsBad,
  volatilityIsGood,
  volatilityIsVeryBad,
  volatilityIsVeryGood
} from "./stockIndicators";

it("yieldIsGood", () => {
  const stock = {
    directYield: 4
  };
  expect(yieldIsGood(stock)).toEqual(false);

  stock.directYield = 6;
  expect(yieldIsGood(stock)).toEqual(true);
});

it("yieldIsVeryGood", () => {
  const stock = {
    directYield: 5
  };
  expect(yieldIsVeryGood(stock)).toEqual(false);

  stock.directYield = 6;
  expect(yieldIsVeryGood(stock)).toEqual(false);

  stock.directYield = 8;
  expect(yieldIsVeryGood(stock)).toEqual(true);
});

it("peIsGood", () => {
  const stock = {
    directYield: 10.33,
    priceEarningsRatio: 11.48
  };
  expect(peIsGood(stock)).toEqual(false);

  stock.priceEarningsRatio = 7.51;
  expect(peIsGood(stock)).toEqual(true);
  expect(peIsVeryBad(stock)).toEqual(false);

  stock.priceEarningsRatio = -7.51;
  expect(peIsGood(stock)).toEqual(false);
});

it("peIsVeryGood", () => {
  const stock = {
    directYield: 10.33,
    priceEarningsRatio: 7.51
  };
  expect(peIsVeryGood(stock)).toEqual(false);

  stock.priceEarningsRatio = 3.51;
  expect(peIsVeryGood(stock)).toEqual(true);
  expect(peIsVeryBad(stock)).toEqual(false);

  stock.priceEarningsRatio = -7.51;
  expect(peIsVeryGood(stock)).toEqual(false);
});

it("peIsVeryBad", () => {
  const stock = {
    directYield: 10.33,
    priceEarningsRatio: 7.51
  };
  expect(peIsVeryBad(stock)).toEqual(false);

  stock.priceEarningsRatio = -3.51;
  expect(peIsVeryBad(stock)).toEqual(true);
  expect(peIsGood(stock)).toEqual(false);
  expect(peIsVeryGood(stock)).toEqual(false);

  stock.priceEarningsRatio = 0;
  expect(peIsVeryBad(stock)).toEqual(true);
  expect(peIsGood(stock)).toEqual(false);
  expect(peIsVeryGood(stock)).toEqual(false);
});

it("Average volatility", () => {
  const stock = {
    volatility: 21.6
  };
  expect(volatilityIsBad(stock)).toEqual(false);
  expect(volatilityIsGood(stock)).toEqual(false);
  expect(volatilityIsVeryBad(stock)).toEqual(false);
  expect(volatilityIsVeryGood(stock)).toEqual(false);
});

it("Volatility is good", () => {
  const stock = {
    volatility: 15
  };
  expect(volatilityIsGood(stock)).toEqual(true);
  expect(volatilityIsBad(stock)).toEqual(false);
  expect(volatilityIsVeryBad(stock)).toEqual(false);
  expect(volatilityIsVeryGood(stock)).toEqual(false);
});

it("Volatility is very good", () => {
  const stock = {
    volatility: 10
  };
  expect(volatilityIsGood(stock)).toEqual(true);
  expect(volatilityIsVeryGood(stock)).toEqual(true);
  expect(volatilityIsBad(stock)).toEqual(false);
  expect(volatilityIsVeryBad(stock)).toEqual(false);
});

it("Volatility is bad", () => {
  const stock = {
    volatility: 35
  };
  expect(volatilityIsBad(stock)).toEqual(true);
  expect(volatilityIsGood(stock)).toEqual(false);
  expect(volatilityIsVeryBad(stock)).toEqual(false);
  expect(volatilityIsVeryGood(stock)).toEqual(false);
});

it("Volatility is very bad", () => {
  const stock = {
    volatility: 45
  };
  expect(volatilityIsBad(stock)).toEqual(true);
  expect(volatilityIsVeryBad(stock)).toEqual(true);
  expect(volatilityIsGood(stock)).toEqual(false);
  expect(volatilityIsVeryGood(stock)).toEqual(false);
});
