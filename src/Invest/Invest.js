import React from "react";
import {
  PRICE_EARNINGS_RATIO,
  DIRECT_YIELD,
  TOTAL_ASSETS,
  EARNINGS_PER_SHARE,
  PRICE_BOOK_VALUE,
  SOLIDITY,
  MARKET_CAP,
  NET_EARNINGS,
  EBIT,
  RETURN_ON_EQUITY,
  RETURN_ON_CAPITAL_EMPLOYED,
  NET_ASSET_VALUE,
  LAST_PRICE,
} from "../constants";
import CategoryPage from "../components/CategoryPage";

class Investment extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    columnsToShow: [
      LAST_PRICE,
      PRICE_EARNINGS_RATIO,
      DIRECT_YIELD,
      NET_EARNINGS,
      EBIT,
      EARNINGS_PER_SHARE,
      TOTAL_ASSETS,
      PRICE_BOOK_VALUE,
      SOLIDITY,
      RETURN_ON_EQUITY,
      RETURN_ON_CAPITAL_EMPLOYED,
      MARKET_CAP,
      NET_ASSET_VALUE,
    ],
  };

  render() {
    return (
      <CategoryPage
        category="invest"
        title="Investmentbolag"
        columnsToShow={this.state.columnsToShow}
        reportType={this.props.reportType}
        setReportType={this.props.setReportType}
        showSingleStock={this.props.showSingleStock}
      />
    );
  }
}

export default Investment;
