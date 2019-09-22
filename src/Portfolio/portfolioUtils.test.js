import {
  getPortfolioValue,
  getStockValue,
  numberOfStocksIsGood,
  portfolioRatioIsGood
} from "./portfolioUtils";

it("getPortfolioValue for empty portfolio should be 0", () => {
  const portfolio = {
    stocks: []
  };
  expect(getPortfolioValue(portfolio)).toEqual(0);
});

it("getPortfolioValue", () => {
  const portfolio = {
    stocks: [
      {
        amount: 10,
        lastPrice: 10
      },
      {
        amount: 10,
        lastPrice: 20
      }
    ]
  };
  expect(getPortfolioValue(portfolio)).toEqual(300);
});

it("portfolioRatioIsGood", () => {
  const portfolio = {
    stocks: [
      {
        amount: 10,
        lastPrice: 10
      },
      {
        amount: 10,
        lastPrice: 20
      }
    ],
    strategy: {
      minShare: 10,
      maxShare: 50
    }
  };
  expect(portfolioRatioIsGood(portfolio, 700)).toEqual(true);
  expect(portfolioRatioIsGood(portfolio, 500)).toEqual(false);
});

it("numberOfStocksIsGood", () => {
  const portfolio = {
    stocks: [
      {
        amount: 10,
        lastPrice: 10
      },
      {
        amount: 10,
        lastPrice: 20
      }
    ],
    strategy: {
      minNumberOfStocks: 1,
      maxNumberOfStocks: 2
    }
  };
  expect(numberOfStocksIsGood(portfolio)).toEqual(true);

  portfolio.stocks.push({ amount: 1, lastPrice: 1 });
  expect(numberOfStocksIsGood(portfolio)).toEqual(false);

  portfolio.stocks = [];
  expect(numberOfStocksIsGood(portfolio)).toEqual(false);
});

it("getStockValue", () => {
  const stock = {
    amount: 10,
    lastPrice: 10
  };
  expect(getStockValue(stock)).toEqual(100);
});
