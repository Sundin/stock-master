//import portfolios from "../data/portfolioData";
import portfolios from "./portfolioData";
import { getStockValue } from "./portfolioUtils";
import { getStockData } from "../SingleStock/backend";
import { exchangeRates } from "../constants";


export function getPortfolios() {
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolios.forEach((portfolio) => {
      promises.push(getStocksInPortfolio(portfolio));
    });
    Promise.all(promises).then((returnData) => {
      resolve(returnData);
    });
  });
}

function getStocksInPortfolio(portfolio) {
  let returnData = portfolio;
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolio.stocks.forEach(stock => {
      promises.push(getStockWithAmount(stock));
    });
    Promise.all(promises).then(stocks => {
      returnData.stocks = stocks.sort((a, b) => {
        return getStockValue(b) - getStockValue(a);
      });
      resolve(returnData);
    });
  });
}

function getStockWithAmount(stock) {
  return new Promise((resolve, reject) => {
    getStockData(stock.id).then(stockData => {
      let combinedData = { ...stock, ...stockData };
      combinedData = convertToSEK(combinedData);
      resolve(combinedData);
    });
  });
}

function convertToSEK(stockData) {
  switch (stockData.currency) {
    case "SEK":
      return stockData;
    case "USD":
      return {
        ...stockData,
        currency: "SEK",
        lastPrice: stockData.lastPrice * exchangeRates.USD
      };
    case "DKK":
      return {
        ...stockData,
        currency: "SEK",
        lastPrice: stockData.lastPrice * exchangeRates.DKK
      };
    case "EUR":
      return {
        ...stockData,
        currency: "SEK",
        lastPrice: stockData.lastPrice * exchangeRates.EUR
      };
    default:
      console.error("Missing currency: " + stockData.currency);
      return stockData;
  }
}
