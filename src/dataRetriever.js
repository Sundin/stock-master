import { BASE_URL } from "./constants";

const rp = require("request-promise-native");

export function getStocks(category) {
  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}/category/${category}`).then(stockData => {
      let parsedData = JSON.parse(stockData);
      resolve(parsedData.stocks);
    });
  });
}
