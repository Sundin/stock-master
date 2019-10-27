import { getStock } from "../avanza";
import { getStockDetails } from "../stockDetails/stockDetails";

const interestingStocks = ["4231", "4093", "4262", "3937"];

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
        const stockDetails = getStockDetails(stockData.id, stockData);
        returnData.push({ ...stockData, ...stockDetails });
      });

      resolve(returnData);
    });
  });
}
