import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood
} from "./stockIndicators";

it("yieldIsGood", () => {
  const stock = {
    keyRatios: {
      directYield: 4
    }
  };
  expect(yieldIsGood(stock)).toEqual(false);

  stock.keyRatios.directYield = 6;
  expect(yieldIsGood(stock)).toEqual(true);
});

it("yieldIsVeryGood", () => {
  const stock = {
    keyRatios: {
      directYield: 5
    }
  };
  expect(yieldIsVeryGood(stock)).toEqual(false);

  stock.keyRatios.directYield = 6;
  expect(yieldIsVeryGood(stock)).toEqual(false);

  stock.keyRatios.directYield = 8;
  expect(yieldIsVeryGood(stock)).toEqual(true);
});

it("peIsGood", () => {
  const stock = {
    keyRatios: {
      directYield: 10.33,
      priceEarningsRatio: 11.48
    }
  };
  expect(peIsGood(stock)).toEqual(false);

  stock.keyRatios.priceEarningsRatio = 7.51;
  expect(peIsGood(stock)).toEqual(true);

  stock.keyRatios.priceEarningsRatio = -7.51;
  expect(peIsGood(stock)).toEqual(false);
});

it("peIsVeryGood", () => {
  const stock = {
    keyRatios: {
      directYield: 10.33,
      priceEarningsRatio: 7.51
    }
  };
  expect(peIsVeryGood(stock)).toEqual(false);

  stock.keyRatios.priceEarningsRatio = 3.51;
  expect(peIsVeryGood(stock)).toEqual(true);

  stock.keyRatios.priceEarningsRatio = -7.51;
  expect(peIsVeryGood(stock)).toEqual(false);
});
