const basePortfolioStrategy = {
  minShare: 25,
  maxShare: 50,
  minNumberOfStocks: 8,
  maxNumberOfStocks: 12,
  minRatioOfEachShareInPortfolio: 5,
  maxRatioOfEachShareInPortfolio: 20
};

const examplePortfolios = [
  {
    id: "1",
    name: "Portfolio 1",
    stocks: [
      {
        id: "5261",
        amount: 1
      },
      {
        id: "5332",
        amount: 1
      }
    ],
    strategy: basePortfolioStrategy
  },
  {
    id: "2",
    name: "Portfolio 2",
    stocks: [
      {
        id: "5261",
        amount: 1
      },
      {
        id: "5332",
        amount: 1
      }
    ],
    strategy: basePortfolioStrategy
  }
];

export default examplePortfolios;
