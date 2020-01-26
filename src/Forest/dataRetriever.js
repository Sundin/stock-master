const rp = require("request-promise-native");

export function getForestStocks() {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/forest").then(stockData => {
      const parsedData = JSON.parse(stockData);
      resolve(parsedData.stocks);
    });
  });
}
