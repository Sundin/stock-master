import React from "react";
import ReactTooltip from "react-tooltip";

import StockTable from "../components/StockTable";
import { getStocks } from "../dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
const classNames = require("classnames");

class CategoryPage extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
    sortKey: "priceEarningsRatio",
  };

  componentDidMount() {
    getStocks(this.props.category)
      .then((stocks) => {
        this.setState({
          stocks: stocks,
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          error: err.message,
        });
      });

    getAllOwnedStocks().then((ownedStocks) => {
      this.setState({
        ownedStocks: ownedStocks,
      });
    });
  }

  renderButtons() {
    return (
      <>
        Visa senaste:
        <button
          className={classNames({
            active: true,
          })}
        >
          Helår
        </button>
        <button
          className={classNames({
            active: false,
          })}
          data-tip="Kommer snart!"
        >
          Kvartal
        </button>
        <ReactTooltip />
      </>
    );
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.renderButtons()}
        <StockTable
          stocks={this.state.stocks}
          ownedStocks={this.state.ownedStocks}
          sortKey={this.state.sortKey}
          onSort={(sortKey) => {
            this.setState({ sortKey: sortKey });
          }}
          showSingleStock={this.props.showSingleStock}
          columnsToShow={this.props.columnsToShow}
        />
      </div>
    );
  }
}

export default CategoryPage;
