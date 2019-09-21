import { getPortfolioValue } from "./portfolioUtils";

// TODO: write more tests

it("empty portfolio", () => {
  const portfolio = {
    stocks: []
  };
  expect(getPortfolioValue(portfolio)).toEqual(0);
});
