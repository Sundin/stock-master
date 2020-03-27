import React from "react";
import StockTable from "../components/StockTable";
import { getStocks } from "../dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
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
  RETURN_ON_CAPITAL_EMPLOYED
} from "../constants";

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
      RETURN_ON_CAPITAL_EMPLOYED
    ]
  };

  componentDidMount() {
    getStocks("forest")
      .then(stocks => {
        this.setState({
          stocks: stocks
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err.message
        });
      });

    getAllOwnedStocks().then(ownedStocks => {
      this.setState({
        ownedStocks: ownedStocks
      });
    });
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>Skog</h1>
        <StockTable
          stocks={this.state.stocks}
          ownedStocks={this.state.ownedStocks}
          sortKey={this.state.sortKey}
          onSort={sortKey => {
            this.setState({ sortKey: sortKey });
          }}
          columnsToShow={this.state.columnsToShow}
          showSingleStock={this.props.showSingleStock}
        />
      </div>
    );
  }
}

export default Forest;
