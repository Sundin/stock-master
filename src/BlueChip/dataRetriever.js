const rp = require("request-promise-native");

export function getBlueChipStocks() {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/blue-chip").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
