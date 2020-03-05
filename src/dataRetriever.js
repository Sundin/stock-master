const rp = require("request-promise-native");

const BASE_URL = "https://bissenisse.duckdns.org:443";

export function getStocks(category) {
  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}/category/${category}`).then(stockData => {
      const parsedData = JSON.parse(stockData);
      resolve(parsedData.stocks);
    });
  });
}
