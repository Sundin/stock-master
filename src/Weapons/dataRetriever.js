import { getStock } from "../avanza";
import { getStockDetails } from "../stockData/stockData";

const interestingStocks = ["4231", "4093"];

export function getWeaponStocks() {
  return new Promise((resolve, reject) => {
    let promises = [];

    let stocksToShow = interestingStocks;

    stocksToShow.forEach(id => {
      promises.push(getStock(id));
    });

    Promise.all(promises).then(stocks => {
      let returnData = [];
      stocks.forEach(stockData => {
        const stockDetails = getStockDetails(stockData.id);
        returnData.push({ ...stockData, ...stockDetails });
      });

      resolve(returnData);
    });
  });
}
