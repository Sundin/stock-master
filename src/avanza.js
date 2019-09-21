var rp = require("request-promise-native");

let cachedStocks = {};

export function getStock(id) {
  if (cachedStocks[id] != null) {
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

export function getStockWithAmount(id, amount) {
  return new Promise((resolve, reject) => {
    getStock(id).then(stockData => {
      resolve({ ...stockData, amount: amount });
    });
  });
}
