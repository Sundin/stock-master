var rp = require("request-promise-native");

const interestingYieldStocks = [
  "5261",
  "5332",
  "5241",
  "52301",
  "632578",
  "569438",
  "5586",
  "5256",
  "5264",
  "96767",
  "5455",
  "5422"
];

export function getInterestingYieldStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    interestingYieldStocks.forEach(id => {
      promises.push(getStock(id));
    });

    Promise.all(promises).then(stocks => {
      let returnData = [];
      stocks.forEach(stockData => {
        returnData.push(stockData);
      });

      returnData.sort((a, b) => {
        return b.keyRatios.directYield - a.keyRatios.directYield;
      });
      resolve(returnData);
    });
  });
}

let cachedStocks = {};

function getStock(id) {
  if (cachedStocks[id] != null) {
    console.log("Found in cache", cachedStocks[id]);
    return Promise.resolve(cachedStocks[id]);
  }

  return new Promise((resolve, reject) => {
    rp("https://avanza.se/_mobile/market/stock/" + id).then(stockData => {
      const parsedData = JSON.parse(stockData);
      cachedStocks[parsedData.id] = parsedData;
      resolve(parsedData);
    });
  });
}

function getStockWithAmount(id, amount) {
  return new Promise((resolve, reject) => {
    getStock(id).then(stockData => {
      resolve({ ...stockData, amount: amount });
    });
  });
}

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
    portfolios.forEach((portfolio, portfolioIndex) => {
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
