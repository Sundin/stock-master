import { exchangeRates } from "./constants";

var rp = require("request-promise-native");

let cachedStocks = {};

export function getStock(id) {
  if (cachedStocks[id] != null) {
    return Promise.resolve(cachedStocks[id]);
  }

  return new Promise((resolve, reject) => {
    rp("https://avanza.se/_mobile/market/stock/" + id).then(stockData => {
      let parsedData = JSON.parse(stockData);

      parsedData = transformJson(parsedData);
      parsedData = convertToSEK(parsedData);

      cachedStocks[parsedData.id] = parsedData;
      resolve(parsedData);
    });
  });
}

export function getStockWithAmount(stock) {
  return new Promise((resolve, reject) => {
    getStock(stock.id).then(stockData => {
      resolve({ ...stock, ...stockData });
    });
  });
}

// Convert stock data json into a format that's easier to use
function transformJson(stockData) {
  // Add more fields from stockData here if necessary
  return {
    name: stockData.name,
    id: stockData.id,
    directYield: stockData.keyRatios.directYield,
    priceEarningsRatio: stockData.keyRatios.priceEarningsRatio,
    volatility: stockData.keyRatios.volatility,
    currency: stockData.currency,
    lastPrice: stockData.lastPrice
  };
}

// TODO: Get currency exchange rates from some API
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
    default:
      console.error("Missing currency: " + stockData.currency);
      return stockData;
  }
}
