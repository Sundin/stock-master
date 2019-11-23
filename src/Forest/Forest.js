import React from "react";
import StockTable from "../components/StockTable";
import { getForestStocks } from "./dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
import {
  OPERATING_MARGIN,
  PRICE_EARNINGS_RATIO,
  PRICE_SALES_RATIO,
  DIRECT_YIELD,
  NUMBER_OF_EMPLOYEES,
  REVENUE,
  REVENUE_PER_EMPLOYEE,
  TOTAL_ASSETS,
  EARNINGS_PER_SHARE,
  PRICE_BOOK_VALUE,
  SOLIDITY,
  MARKET_CAP,
  NET_EARNINGS,
  EBIT
} from "../constants";

class Forest extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    sortKey: PRICE_EARNINGS_RATIO,
    columnsToShow: [
      PRICE_EARNINGS_RATIO,
      PRICE_SALES_RATIO,
      DIRECT_YIELD,
      NUMBER_OF_EMPLOYEES,
      REVENUE,
      REVENUE_PER_EMPLOYEE,
      OPERATING_MARGIN,
      TOTAL_ASSETS,
      PRICE_BOOK_VALUE,
      SOLIDITY,
      MARKET_CAP
    ]
  };

  componentDidMount() {
    getForestStocks()
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
          // columnsToShow={this.state.columnsToShow}
          showSingleStock={this.props.showSingleStock}
        />
      </div>
    );
  }
}

export default Forest;
