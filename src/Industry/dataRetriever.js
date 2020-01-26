const rp = require("request-promise-native");

export function getIndustryStocks() {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/industry").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
