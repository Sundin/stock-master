var rp = require("request-promise-native");

let cachedStocks = {};

export function getStock(id) {
  if (cachedStocks[id] != null) {
    return Promise.resolve(cachedStocks[id]);
  }

  return new Promise((resolve, reject) => {
    rp("https://avanza.se/_mobile/market/stock/" + id).then(stockData => {
      let parsedData = JSON.parse(stockData);

      parsedData = convertToSEK(parsedData);

      cachedStocks[parsedData.id] = parsedData;
      resolve(parsedData);
    });
  });
}

export function getStockWithAmount(id, amount) {
  return new Promise((resolve, reject) => {
    getStock(id).then(stockData => {
      resolve({ ...stockData, amount: amount });
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
        lastPrice: stockData.lastPrice * 9.7
      };
    case "DKK":
      return {
        ...stockData,
        currency: "SEK",
        lastPrice: stockData.lastPrice * 1.43
      };
    default:
      console.error("Missing currency: " + stockData.currency);
      return stockData;
  }
}
