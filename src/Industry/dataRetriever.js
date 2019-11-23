import { getStock } from "../avanza";
import { getStockDetails } from "../stockDetails/stockDetails";

const interestingStocks = [
  "5234",
  "5235",
  "5447",
  "5580",
  "5471",
  "5269",
  "5259",
  "5271",
  "5238",
  "5236",
  "5267",
  "45189",
  "45188",
  "861431",
  "861430"
];

export function getIndustryStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    let stocksToShow = interestingStocks;

    stocksToShow.forEach(id => {
      promises.push(getStock(id));
    });

    Promise.all(promises).then(stocks => {
      let returnData = [];
      stocks.forEach(stockData => {
        const stockDetails = getStockDetails(stockData.id, stockData);
        returnData.push({ ...stockData, ...stockDetails });
      });

      resolve(returnData);
    });
  });
}
