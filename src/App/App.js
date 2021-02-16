import React from "react";
import "./App.css";
import Portfolio from "../Portfolio/Portfolio";
import SingleStock from "../SingleStock/SingleStock";
import Forest from "../Forest/Forest";
import Invest from "../Invest/Invest";
import Bank from "../Bank/Bank";
import Space from "../Space/Space";
import CategoryPage from "../components/CategoryPage";
import {
  ANNUAL_REPORT,
  PROFIT_FROM_PROPERTY_MANAGEMENT_BEFORE_TAX,
  LAST_PRICE,
  DIRECT_YIELD,
  PRICE_EARNINGS_RATIO,
  PFPMBF_PER_SHARE,
  PRICE_PFPMBT_RATIO,
  PRICE_PFPMAT_RATIO,
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
  RETURN_ON_CAPITAL_EMPLOYED,
  SHOW_PORTFOLIO,
} from "../constants";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";
const blueChipPage = "BLUE_CHIP_PAGE";
const industryPage = "INDUSTRY_PAGE";
const forestPage = "FOREST_PAGE";
const investPage = "INVEST_PAGE";
const realEstatePage = "REAL_ESTATE_PAGE";
const bankPage = "BANK_PAGE";
const techPage = "TECH_PAGE";
const spacePage = "SPACE_PAGE";

const classNames = require("classnames");

class App extends React.Component {
  state = {
    activePage: bestYieldPage,
    activeStock: null,
    columnsToShow: [],
    reportType: ANNUAL_REPORT,
  };

  renderActivePage() {
    if (this.state.activeStock) {
      return (
        <SingleStock
          id={this.state.activeStock}
          columnsToShow={this.state.columnsToShow}
        />
      );
    }

    const passOnProps = {
      reportType: this.state.reportType,
      setReportType: this.setReportType.bind(this),
      showSingleStock: this.showSingleStock.bind(this),
    };

    switch (this.state.activePage) {
      case portfolioPage:
        return <Portfolio showSingleStock={this.showSingleStock.bind(this)} />;
      case bestYieldPage:
        return (
          <CategoryPage
            category="best-yield"
            title="Intressanta utdelningsaktier"
            {...passOnProps}
          />
        );
      case blueChipPage:
        return (
          <CategoryPage
            category="blue-chip"
            title="Intressanta basaktier"
            {...passOnProps}
          />
        );
      case industryPage:
        return (
          <CategoryPage category="industry" title="Verkstad" {...passOnProps} />
        );
      case forestPage:
        return <Forest {...passOnProps} />;
      case investPage:
        return <Invest {...passOnProps} />;
      case realEstatePage:
        return (
          <CategoryPage
            category="realEstate"
            title="Fastighetsbolag"
            {...passOnProps}
            columnsToShow={[
              LAST_PRICE,
              PRICE_EARNINGS_RATIO,
              DIRECT_YIELD,
              PROFIT_FROM_PROPERTY_MANAGEMENT_BEFORE_TAX,
              PFPMBF_PER_SHARE,
              PRICE_PFPMBT_RATIO,
              PRICE_PFPMAT_RATIO,
            ]}
          />
        );
      case bankPage:
        return <Bank {...passOnProps} />;
      case techPage:
        return (
          <CategoryPage
            category="tech"
            title="Teknik"
            {...passOnProps}
            columnsToShow={[
              LAST_PRICE,
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
              RETURN_ON_CAPITAL_EMPLOYED,
            ]}
          />
        );
      case spacePage:
        return <Space {...passOnProps} />;
      default:
        return <div></div>;
    }
  }

  renderButton(title, page) {
    return (
      <button
        onClick={() => {
          this.setState({ activePage: page, activeStock: null });
        }}
        className={classNames({
          active: this.state.activePage === page,
        })}
      >
        {title}
      </button>
    );
  }

  showSingleStock(id, columnsToShow) {
    this.setState({ activeStock: id, columnsToShow: columnsToShow });
  }

  setReportType(reportType) {
    this.setState({ reportType: reportType });
  }

  render() {
    return (
      <div>
        <h1>BisseNisse</h1>
        {SHOW_PORTFOLIO && this.renderButton("Portfolio", portfolioPage)} 
        {this.renderButton("Utdelningsaktier", bestYieldPage)}
        {this.renderButton("Basaktier", blueChipPage)}
        {this.renderButton("Verkstad", industryPage)}
        {this.renderButton("Skog", forestPage)}
        {this.renderButton("Investment", investPage)}
        {this.renderButton("Fastigheter", realEstatePage)}
        {this.renderButton("Bank", bankPage)}
        {this.renderButton("Teknik", techPage)}
        {this.renderButton("Rymdteknik", spacePage)}
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
