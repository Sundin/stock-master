const rp = require("request-promise-native");

export function getInterestingYieldStocks() {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/best-yield").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
