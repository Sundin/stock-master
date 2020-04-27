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
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category === prevProps.category) {
      return;
    }
    this.loadData();
  }

  loadData() {
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
          onClick={() => {
            this.props.setReportType("year");
          }}
          className={classNames({
            active: this.props.reportType === "year",
          })}
        >
          Helår
        </button>
        <button
          onClick={() => {
            this.props.setReportType("quarter");
          }}
          className={classNames({
            active: this.props.reportType === "quarter",
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
          reportType={this.props.reportType}
        />
      </div>
    );
  }
}

export default CategoryPage;
