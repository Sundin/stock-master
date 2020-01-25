const rp = require("request-promise-native");

export function getIndustryStocks() {
  return new Promise((resolve, reject) => {
    rp("http://bissenisse.duckdns.org:8080/category/industry").then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
