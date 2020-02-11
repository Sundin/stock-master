const rp = require("request-promise-native");

export function getStocks() {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/realEstate").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
