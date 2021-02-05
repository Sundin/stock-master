import { getPortfolios } from "./dataRetriever";

export function getPortfolioValue(portfolioData) {
  return portfolioData.stocks.reduce((sum, stock) => {
    return sum + getStockValue(stock);
  }, 0);
}

export function portfolioRatioIsGood(portfolioData, totalPortfolioValue) {
  const portfolioRatio =
    (getPortfolioValue(portfolioData) / totalPortfolioValue) * 100;
  return (
    portfolioRatio >= portfolioData.strategy.minShare &&
    portfolioRatio <= portfolioData.strategy.maxShare
  );
}

export function numberOfStocksIsGood(portfolioData) {
  return (
    portfolioData.stocks.length >= portfolioData.strategy.minNumberOfStocks &&
    portfolioData.stocks.length <= portfolioData.strategy.maxNumberOfStocks
  );
}

export function getStockValue(stock) {
  // Adds hard-coded cash value for stocks in portfolio.
  // This is useful when figuring out how much to invest in a certain stock
  // in order to fulfill your investment strategy
  return (stock.amount * stock.lastPrice) + (stock.cash ? stock.cash : 0);
}

export function getAllOwnedStocks() {
  return new Promise((resolve, reject) => {
    let stocks = [];
    getPortfolios().then(portfolios => {
      portfolios.forEach(portfolio => {
        stocks = stocks.concat(portfolio.stocks);
      });
      resolve(stocks);
    });
  });
}
