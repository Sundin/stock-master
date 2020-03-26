import React from "react";
import StockTable from "../components/StockTable";

import {
  PRICE_EARNINGS_RATIO,
  ANNUAL_REPORTS_TABLE,
  INTERIM_REPORTS_TABLE
} from "../constants";
import { getStockData } from "./backend";
import ReportInputSection from "./ReportInputSection";

class SingleStock extends React.Component {
  state = {
    stocksDetails: null,
    error: null,
    sortKey: PRICE_EARNINGS_RATIO,
    showReportInput: false
  };

  componentDidMount() {
    getStockData(this.props.id).then(data => {
      this.setState({
        stockDetails: data
      });
    });
  }

  renderAnnualReports() {
    const { stockDetails } = this.state;

    if (!stockDetails.annualReports) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Årsrapporter</h2>
        <StockTable
          type={ANNUAL_REPORTS_TABLE}
          stocks={stockDetails.annualReports}
          ownedStocks={[]}
          columnsToShow={this.props.columnsToShow}
        />
      </div>
    );
  }

  renderInterimReports() {
    const { stockDetails } = this.state;

    if (!stockDetails.interimReports) {
      return <div></div>;
    }
    return (
      <div>
        <h2>Kvartalsrapporter</h2>
        <StockTable
          type={INTERIM_REPORTS_TABLE}
          stocks={stockDetails.interimReports}
          ownedStocks={[]}
          columnsToShow={this.props.columnsToShow}
        />
      </div>
    );
  }

  renderInputSection() {
    if (!this.props.id) {
      return <div />;
    }
    return (
      <div>
        <ReportInputSection
          id={this.props.id}
          stockDetails={this.state.stockDetails}
        />
      </div>
    );
  }

  renderNewReportButton() {
    return (
      <button
        onClick={() => {
          this.setState({ showReportInput: true });
        }}
      >
        New Report
      </button>
    );
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    const { stockDetails, showReportInput } = this.state;

    if (!stockDetails) {
      return <div />;
    }

    if (showReportInput) {
      return this.renderInputSection();
    }

    return (
      <div>
        <h1>{stockDetails.name}</h1>

        {this.renderAnnualReports()}
        {this.renderInterimReports()}
        <hr />
        {this.renderNewReportButton()}
      </div>
    );
  }
}

export default SingleStock;
