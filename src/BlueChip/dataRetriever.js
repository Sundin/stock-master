const rp = require("request-promise-native");

export function getBlueChipStocks() {
  return new Promise((resolve, reject) => {
    rp("http://bissenisse.duckdns.org:8080/category/blue-chip").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
