const rp = require("request-promise-native");

export function getInterestingYieldStocks() {
  return new Promise((resolve, reject) => {
    rp("http://bissenisse.duckdns.org:8080/category/best-yield").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
