import React from "react";
import ReactTooltip from "react-tooltip";

import StockTable from "../components/StockTable";
import { getStocks } from "../dataRetriever";

import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
import { QUARTERLY_REPORT, ANNUAL_REPORT } from "../constants";
const classNames = require("classnames");

class CategoryPage extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
    error: null,
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
            this.props.setReportType(ANNUAL_REPORT);
          }}
          className={classNames({
            active: this.props.reportType === ANNUAL_REPORT,
          })}
          data-tip="Visa data från senaste årsredovisningen"
        >
          Helår
        </button>
        <button
          onClick={() => {
            this.props.setReportType(QUARTERLY_REPORT);
          }}
          className={classNames({
            active: this.props.reportType === QUARTERLY_REPORT,
          })}
          data-tip="Visa data från senaste kvartalsrapporten"
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
          showSingleStock={this.props.showSingleStock}
          columnsToShow={this.props.columnsToShow}
          reportType={this.props.reportType}
        />
        <p>
          <i>Klicka på en kolumnrubrik för att sortera tabellen.</i>
        </p>
      </div>
    );
  }
}

export default CategoryPage;
