const rp = require("request-promise-native");

export function getForestStocks() {
  return new Promise((resolve, reject) => {
    rp("http://bissenisse.duckdns.org:8080/category/forest").then(stockData => {
      const parsedData = JSON.parse(stockData);
      resolve(parsedData.stocks);
    });
  });
}
