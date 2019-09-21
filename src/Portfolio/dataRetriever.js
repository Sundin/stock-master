import { getStockWithAmount } from "../avanza";
import portfolios from "../data/portfolioData";
import { getStockValue } from "./portfolioUtils";

export function getPortfolios() {
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolios.forEach(portfolio => {
      promises.push(getStocksInPortfolio(portfolio));
    });
    Promise.all(promises).then(returnData => {
      resolve(returnData);
    });
  });
}

function getStocksInPortfolio(portfolio) {
  let returnData = portfolio;
  return new Promise((resolve, reject) => {
    let promises = [];
    portfolio.stocks.forEach(stock => {
      promises.push(getStockWithAmount(stock.id, stock.amount));
    });
    Promise.all(promises).then(stocks => {
      returnData.stocks = stocks.sort((a, b) => {
        return getStockValue(b) - getStockValue(a);
      });
      resolve(returnData);
    });
  });
}
