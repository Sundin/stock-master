import React from "react";
import StockTable from "../components/StockTable";

import {
  PRICE_EARNINGS_RATIO,
  ANNUAL_REPORTS_TABLE,
  INTERIM_REPORTS_TABLE,
  VOLATILITY,
  DIRECT_YIELD,
  MARKET_CAP,
  PRICE_BOOK_VALUE,
  PRICE_SALES_RATIO,
  REVENUE,
  EBIT,
  NET_EARNINGS,
  TOTAL_ASSETS,
  TOTAL_EQUITY,
  TOTAL_DEBT
} from "../constants";
import { getStockData } from "./backend";
import ReportInputSection from "./ReportInputSection";

class SingleStock extends React.Component {
  state = {
    stocksDetails: null,
    error: null,
    showReportInput: false,
    reportData: null
  };

  componentDidMount() {
    getStockData(this.props.id).then(data => {
      this.setState({
        stockDetails: data
      });
    });
  }

  getColumnsToShow() {
    const inheritedColumns = this.props.columnsToShow.filter(col => {
      return (
        col !== PRICE_EARNINGS_RATIO &&
        col !== VOLATILITY &&
        col !== DIRECT_YIELD &&
        col !== MARKET_CAP &&
        col !== PRICE_BOOK_VALUE &&
        col !== PRICE_SALES_RATIO
      );
    });
    const extraColumns = [
      REVENUE,
      EBIT,
      NET_EARNINGS,
      TOTAL_ASSETS,
      TOTAL_EQUITY,
      TOTAL_DEBT
    ];
    return [...new Set([...inheritedColumns, ...extraColumns])];
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
          columnsToShow={this.getColumnsToShow()}
          handleClickReport={this.handleClickReport.bind(this)}
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
          columnsToShow={this.getColumnsToShow()}
          handleClickReport={this.handleClickReport.bind(this)}
        />
      </div>
    );
  }

  handleClickReport(reportData) {
    this.setState({ showReportInput: true, reportData: reportData });
  }

  reportSaved() {
    this.setState({ showReportInput: false, reportData: null });
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
          reportData={this.state.reportData}
          reportSaved={this.reportSaved.bind(this)}
        />
      </div>
    );
  }

  renderNewReportButton() {
    return (
      <button
        onClick={() => {
          this.setState({ showReportInput: true, reportData: null });
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
