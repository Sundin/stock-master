const rp = require("request-promise-native");

export function getStocks(category) {
  return new Promise((resolve, reject) => {
    rp("https://bissenisse.duckdns.org:443/category/" + category).then(
      stockData => {
        const parsedData = JSON.parse(stockData);
        resolve(parsedData.stocks);
      }
    );
  });
}
