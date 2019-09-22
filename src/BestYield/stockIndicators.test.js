import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood
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

  stock.priceEarningsRatio = -7.51;
  expect(peIsVeryGood(stock)).toEqual(false);
});
