import React from "react";
import StockTable from "../components/StockTable";
import { getStocks } from "../dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
import {
  PRICE_EARNINGS_RATIO,
  DIRECT_YIELD,
  TOTAL_ASSETS,
  EARNINGS_PER_SHARE,
  PRICE_BOOK_VALUE,
  SOLIDITY,
  MARKET_CAP,
  NET_EARNINGS,
  EBIT
} from "../constants";

class BlueChip extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    sortKey: "priceEarningsRatio",
    columnsToShow: [
      PRICE_EARNINGS_RATIO,
      DIRECT_YIELD,
      NET_EARNINGS,
      EBIT,
      EARNINGS_PER_SHARE,
      TOTAL_ASSETS,
      PRICE_BOOK_VALUE,
      SOLIDITY,
      MARKET_CAP
    ]
  };

  componentDidMount() {
    getStocks("invest")
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
        <h1>Investment</h1>
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

export default BlueChip;
