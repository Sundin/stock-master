export function getPortfolioValue(portfolioData) {
  return portfolioData.stocks.reduce((sum, stock) => {
    return sum + stock.amount * stock.lastPrice;
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
