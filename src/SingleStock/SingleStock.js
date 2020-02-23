import React from "react";
import StockTable from "../components/StockTable";

import {
  PRICE_EARNINGS_RATIO,
  ANNUAL_REPORTS_TABLE,
  INTERIM_REPORTS_TABLE,
  MILLION,
  BILLION,
  THOUSAND
} from "../constants";
import { saveStockData, getStockData } from "./backend";

class SingleStock extends React.Component {
  state = {
    stocksDetails: null,
    error: null,
    sortKey: PRICE_EARNINGS_RATIO
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
        <InputSection
          id={this.props.id}
          stockDetails={this.state.stockDetails}
        />
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

        {this.renderAnnualReports()}
        {this.renderInterimReports()}

        {this.renderInputSection()}
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

    // Multiply by 1 to ensure its a number, not a string
    let report = {
      currency: this.state.currency,
      year: this.state.year * 1,
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

    let reqBody = this.props.stockDetails;

    if (!reqBody.annualReports || !Array.isArray(reqBody.annualReports)) {
      reqBody.annualReports = [];
    }
    if (!reqBody.interimReports || !Array.isArray(reqBody.interimReports)) {
      reqBody.interimReports = [];
    }

    if (this.state.period === "YEAR") {
      reqBody.annualReports = reqBody.annualReports
        // Replace report if it already exists
        .filter(r => r.year !== report.year);
      reqBody.annualReports.push(report);
    } else {
      reqBody.interimReports = reqBody.interimReports
        // Replace report if it already exists
        .filter(r => r.year !== report.year || r.period !== report.period);
      reqBody.interimReports.push(report);
    }
    saveStockData(this.props.id, reqBody);
  }

  render() {
    return (
      <div>
        <h2>Lägg till rapport</h2>
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
            Rörelseresultat (EBIT):
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
      </div>
    );
  }
}
