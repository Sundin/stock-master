export function getPortfolioValue(portfolioData) {
  return portfolioData.stocks.reduce((sum, stock) => {
    return sum + stock.amount * stock.lastPrice;
  }, 0);
}
