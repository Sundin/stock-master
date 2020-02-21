import React from "react";
import StockTable from "../components/StockTable";
import { getStocks } from "../dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";

class BlueChip extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    sortKey: "priceEarningsRatio"
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
          showSingleStock={this.props.showSingleStock}
        />
      </div>
    );
  }
}

export default BlueChip;
