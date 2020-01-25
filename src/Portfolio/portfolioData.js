const basePortfolioStrategy = {
  minShare: 20,
  maxShare: 30,
  minNumberOfStocks: 8,
  maxNumberOfStocks: 12,
  minRatioOfEachShareInPortfolio: 5,
  maxRatioOfEachShareInPortfolio: 30
};

const portfolios = [
  {
    id: "1",
    name: "Basportföljen",
    stocks: [
      // {
      //   id: "5465",
      //   name: "Axfood",
      //   amount: 10,
      //   sector: "Konsumentvaror"
      // }
    ],
    strategy: {
      ...basePortfolioStrategy,
      minShare: 40,
      maxShare: 60
    }
  },
  {
    id: "2",
    name: "Raketportföljen",
    stocks: [
      // {
      //   id: "3323",
      //   name: "Apple Inc",
      //   amount: 1,
      //   sector: "Teknik"
      // }
    ],
    strategy: basePortfolioStrategy
  }
];

export default portfolios;
