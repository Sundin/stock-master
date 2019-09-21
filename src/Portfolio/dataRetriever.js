import { getStockWithAmount } from "../avanza";

const basePortfolioStrategy = {
  minShare: 25,
  maxShare: 50,
  minNumberOfStocks: 8,
  maxNumberOfStocks: 12,
  minShareOfEachShareInPortfolio: 5,
  maxShareOfEachShareInPortfolio: 20
};

const portfolios = [
  {
    id: "1",
    name: "Portfolio 1",
    stocks: [
      {
        id: "5261",
        amount: 1
      },
      {
        id: "5332",
        amount: 1
      }
    ],
    strategy: basePortfolioStrategy
  },
  {
    id: "2",
    name: "Portfolio 2",
    stocks: [
      {
        id: "5261",
        amount: 1
      },
      {
        id: "5332",
        amount: 1
      }
    ],
    strategy: basePortfolioStrategy
  }
];

export function getPortfolios() {
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolios.forEach(portfolio => {
      promises.push(getStocksInPortfolio(portfolio));
    });
    Promise.all(promises).then(returnData => {
      resolve(returnData);
    });
  });
}

function getStocksInPortfolio(portfolio) {
  let returnData = portfolio;
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolio.stocks.forEach(stock => {
      promises.push(getStockWithAmount(stock.id, stock.amount));
    });
    Promise.all(promises).then(stocks => {
      returnData.stocks = stocks;
      resolve(returnData);
    });
  });
}
