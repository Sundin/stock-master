import { getPortfolioValue } from "./portfolioUtils";

it("empty portfolio", () => {
  const portfolio = {
    stocks: []
  };
  expect(getPortfolioValue(portfolio)).toEqual(0);
});
