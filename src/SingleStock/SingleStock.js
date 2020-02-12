import React from "react";
import StockTable from "../components/StockTable";

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
  ANNUAL_REPORTS_TABLE,
  INTERIM_REPORTS_TABLE,
  NET_EARNINGS,
  EBIT,
  MILLION,
  BILLION,
  THOUSAND
} from "../constants";
import { getStockDetails } from "../stockDetails/stockDetails";
import { getStock } from "../avanza";
import { saveStockData } from "./putRequest";

class SingleStock extends React.Component {
  state = {
    stocksDetails: null,
    error: null,
    sortKey: PRICE_EARNINGS_RATIO,
    columnsToShow: [
      PRICE_SALES_RATIO,
      NUMBER_OF_EMPLOYEES,
      REVENUE,
      REVENUE_PER_EMPLOYEE,
      EBIT,
      NET_EARNINGS,
      OPERATING_MARGIN,
      TOTAL_ASSETS,
      EARNINGS_PER_SHARE,
      PRICE_BOOK_VALUE,
      SOLIDITY
    ]
  };

  componentDidMount() {
    getStock(this.props.id).then(basicData => {
      this.setState({
        stockDetails: {
          ...basicData,
          ...getStockDetails(this.props.id, basicData)
        }
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
          columnsToShow={this.state.columnsToShow}
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
          columnsToShow={this.state.columnsToShow}
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
        <InputSection id={this.props.id} />
      </div>
    );
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    const { stockDetails } = this.state;

    if (!stockDetails) {
      return <div />;
    }

    return (
      <div>
        <h1>{stockDetails.name}</h1>

        {this.renderInputSection()}

        {this.renderAnnualReports()}
        {this.renderInterimReports()}
      </div>
    );
  }
}

export default SingleStock;

class InputSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "SEK",
      multiplier: "NONE",
      period: "YEAR",
      year: 2020,
      revenue: 0,
      earningsBeforeInterestAndTax: 0,
      netEarnings: 0,
      totalAssets: 0,
      totalEquity: 0,
      totalDebt: 0,
      numberOfShares: 0,
      numberOfEmployees: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  multiply(value) {
    if (!this.state.multiplier || this.state.multiplier === "") {
      return value * 1;
    }
    switch (this.state.multiplier) {
      case "MILLION":
        return value * MILLION;
      case "BILLION":
        return value * BILLION;
      case "THOUSAND":
        return value * THOUSAND;
      case "NONE":
        return value * 1;
      default:
        return value * 1;
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let report = {
      currency: this.state.currency,
      year: this.state.year,
      revenue: this.multiply(this.state.revenue),
      earningsBeforeInterestAndTax: this.multiply(
        this.state.earningsBeforeInterestAndTax
      ),
      netEarnings: this.multiply(this.state.netEarnings),
      numberOfShares: this.state.numberOfShares * 1,
      numberOfEmployees: this.state.numberOfEmployees * 1
    };

    if (this.state.period !== "YEAR") {
      report.period = this.state.period;
    }

    if (this.state.totalAssets !== 0) {
      report.totalAssets = this.multiply(this.state.totalAssets);
    }
    if (this.state.totalEquity !== 0) {
      report.totalEquity = this.multiply(this.state.totalEquity);
    }
    if (this.state.totalDebt !== 0) {
      report.totalDebt = this.multiply(this.state.totalDebt);
    }

    let reqBody = {};

    if (this.state.period === "YEAR") {
      reqBody.annualReports = [report];
    } else {
      reqBody.interimReports = [report];
    }
    saveStockData(this.props.id, reqBody);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          År:
          <input
            name="year"
            type="number"
            checked={this.state.year}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Kvartal:
          <select
            name="period"
            value={this.state.period}
            onChange={this.handleInputChange}
          >
            <option value="YEAR">Helår</option>
            <option value="Q1">Q1</option>
            <option value="Q2">Q2</option>
            <option value="Q3">Q3</option>
            <option value="Q4">Q4</option>
          </select>
        </label>
        <br />
        <h3>Räkenskaper</h3>
        <label>
          Valuta:
          <select
            name="multiplier"
            value={this.state.multiplier}
            onChange={this.handleInputChange}
          >
            <option value="NONE"></option>
            <option value="THOUSAND">Tusen</option>
            <option value="MILLION">Miljoner</option>
            <option value="BILLION">Miljarder</option>
          </select>
          <select
            name="currency"
            value={this.state.currency}
            onChange={this.handleInputChange}
          >
            <option value="SEK">SEK</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="DKK">DKK</option>
          </select>
        </label>
        <br />
        <label>
          Omsättning (revenue):
          <input
            name="revenue"
            type="number"
            value={this.state.revenue}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          EBIT:
          <input
            name="earningsBeforeInterestAndTax"
            type="number"
            value={this.state.earningsBeforeInterestAndTax}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Vinst (Net earnings):
          <input
            name="netEarnings"
            type="number"
            value={this.state.netEarnings}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Tillgångar (Total assets):
          <input
            name="totalAssets"
            type="number"
            value={this.state.totalAssets}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Eget kapital (Total equity):
          <input
            name="totalEquity"
            type="number"
            value={this.state.totalEquity}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <label>
          Skuld (Total debt):
          <input
            name="totalDebt"
            type="number"
            value={this.state.totalDebt}
            onChange={this.handleInputChange}
          />
        </label>
        <br />

        <h3>Annan info</h3>
        <label>
          Antal anställda:
          <input
            name="numberOfEmployees"
            type="number"
            value={this.state.numberOfEmployees}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Antal aktier:
          <input
            name="numberOfShares"
            type="number"
            value={this.state.numberOfShares}
            onChange={this.handleInputChange}
          />
        </label>

        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
