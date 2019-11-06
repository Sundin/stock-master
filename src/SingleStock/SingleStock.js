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
  ANNUAL_REPORTS_TABLE
} from "../constants";
import { getStockDetails } from "../stockDetails/stockDetails";
import { getStock } from "../avanza";

class SingleStock extends React.Component {
  state = {
    stocksDetails: null,
    error: null,
    sortKey: PRICE_EARNINGS_RATIO,
    columnsToShow: [
      PRICE_EARNINGS_RATIO,
      PRICE_SALES_RATIO,
      DIRECT_YIELD,
      NUMBER_OF_EMPLOYEES,
      REVENUE,
      REVENUE_PER_EMPLOYEE,
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
      <StockTable
        type={ANNUAL_REPORTS_TABLE}
        stocks={stockDetails.annualReports}
        ownedStocks={[]}
        columnsToShow={this.state.columnsToShow}
      />
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
      </div>
    );
  }
}

export default SingleStock;
