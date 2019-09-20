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
      console.log("got data", parsedData);
      resolve(parsedData);
    });
  });
}

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
    ]
  }
];

export function getPortfolios() {
  let returnData = portfolios;

  return new Promise((resolve, reject) => {
    portfolios.forEach((portfolio, portfolioIndex) => {
      let promises = [];
      portfolio.stocks.forEach((stock, stockIndex) => {
        promises.push(getStock(stock.id));

        Promise.all(promises).then(stocks => {
          stocks.forEach(stockData => {
            returnData[portfolioIndex].stocks[stockIndex] = {
              ...stockData,
              amount: portfolios[portfolioIndex].stocks[stockIndex].amount
            };
          });
          console.log("resolving");
          resolve(returnData);
        });
      });
    });
  });
}
