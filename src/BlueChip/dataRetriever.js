import { getStock } from "../avanza";

const omsx30stocks = [
  "5447",
  "5580",
  "5271",
  "5431",
  "5234",
  "5235",
  "5236",
  "5564",
  "5238",
  "5240",
  "764241",
  "5282",
  "5364",
  "5286",
  "5247",
  "5369",
  "5249",
  "5471",
  "5270",
  "5255",
  "5257",
  "5259",
  "5260",
  "5263",
  "5264",
  "5241",
  "5266",
  "5386",
  "5479",
  "5269",
  "5261",
  "5265",
  "5256"
];

export function getBlueChipStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    omsx30stocks.forEach(id => {
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
