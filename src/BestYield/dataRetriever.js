import { getStock } from "../avanza";

const interestingYieldStocks = [
  "5261",
  "5332",
  "5241",
  "52301",
  "632578",
  "569438",
  "5586",
  "5256",
  "5264",
  "96767",
  "5455",
  "5422"
];

export function getInterestingYieldStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    interestingYieldStocks.forEach(id => {
      promises.push(getStock(id));
    });

    Promise.all(promises).then(stocks => {
      let returnData = [];
      stocks.forEach(stockData => {
        returnData.push(stockData);
      });

      returnData.sort((a, b) => {
        return b.directYield - a.directYield;
      });
      resolve(returnData);
    });
  });
}
