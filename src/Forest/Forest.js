import React from "react";
import {
  PRICE_EARNINGS_RATIO,
  DIRECT_YIELD,
  VOLATILITY,
  PRICE_BOOK_VALUE,
  EARNINGS_PER_SHARE,
  REVENUE_PER_EMPLOYEE,
  REVENUE_PER_SHARE,
  OPERATING_MARGIN,
  SOLIDITY,
  PRICE_SALES_RATIO,
  MARKET_CAP,
  RETURN_ON_EQUITY,
  RETURN_ON_CAPITAL_EMPLOYED,
} from "../constants";
import CategoryPage from "../components/CategoryPage";

class Forest extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    sortKey: PRICE_EARNINGS_RATIO,
    columnsToShow: [
      PRICE_EARNINGS_RATIO,
      DIRECT_YIELD,
      VOLATILITY,
      PRICE_BOOK_VALUE,
      EARNINGS_PER_SHARE,
      REVENUE_PER_EMPLOYEE,
      REVENUE_PER_SHARE,
      OPERATING_MARGIN,
      SOLIDITY,
      PRICE_SALES_RATIO,
      MARKET_CAP,
      RETURN_ON_EQUITY,
      RETURN_ON_CAPITAL_EMPLOYED,
    ],
  };

  render() {
    return (
      <CategoryPage
        category="forest"
        title="Skog"
        columnsToShow={this.state.columnsToShow}
      />
    );
  }
}

export default Forest;
