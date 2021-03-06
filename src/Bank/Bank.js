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
  LAST_PRICE,
} from "../constants";
import CategoryPage from "../components/CategoryPage";

class Bank extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    columnsToShow: [
      LAST_PRICE,
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
    ],
  };

  render() {
    return (
      <CategoryPage
        category="bank"
        title="Bank"
        columnsToShow={this.state.columnsToShow}
        reportType={this.props.reportType}
        setReportType={this.props.setReportType}
        showSingleStock={this.props.showSingleStock}
      />
    );
  }
}

export default Bank;
