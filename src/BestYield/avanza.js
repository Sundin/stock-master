var rp = require("request-promise-native");

const stockIds = [
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

export default function getAllStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    stockIds.forEach(id => {
      promises.push(getStock(id));
    });

    Promise.all(promises).then(stocks => {
      let returnData = [];
      stocks.forEach(stockData => {
        const parsedData = JSON.parse(stockData);
        console.log("got data", parsedData);
        returnData.push(parsedData);
      });

      returnData.sort((a, b) => {
        return b.keyRatios.directYield - a.keyRatios.directYield;
      });
      resolve(returnData);
    });
  });
}

function getStock(id) {
  return rp("https://avanza.se/_mobile/market/stock/" + id);
}
