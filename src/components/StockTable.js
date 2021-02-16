import React from "react";
import ReactTooltip from "react-tooltip";
import { stockIsOwned } from "../stockUtils";
import { translate, tooltip } from "../translate";
import {
  PRICE_EARNINGS_RATIO,
  DIRECT_YIELD,
  VOLATILITY,
  ID,
  ANNUAL_REPORTS_TABLE,
  YEAR,
  MULTIPLE_STOCKS_TABLE,
  INTERIM_REPORTS_TABLE,
  QUARTERLY_REPORT,
  OLLE,
  LAST_PRICE,
} from "../constants";
import Stock from "./Stock";

// PureComponents only rerender if at least one state or prop value changes.
// Change is determined by doing a shallow comparison of state and prop keys.
// Memoization might increase performance further
// https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
class StockTable extends React.PureComponent {
  state = {
    sortKey: PRICE_EARNINGS_RATIO,
  };

  sortBy(sortKey) {
    this.setState({sortKey: sortKey});
  }

  render() {
    const { stocks, ownedStocks, type, reportType } = this.props;
    const { sortKey } = this.state;

    if (sortKey) {
      stocks.sort((a, b) => {
        return a[sortKey] <  b[sortKey] ? -1 : 1;
      });
    }
  
    let columnsToShow = this.props.columnsToShow;
  
    if (reportType === QUARTERLY_REPORT) {
      columnsToShow = columnsToShow.concat([OLLE]);
    }
  
    return (
      <>
        <table>
          <thead>
            <tr>
              <th width="40%" onClick={() => this.sortBy("name")}>{getMainColumn(type)}</th>
              {columnsToShow.map((column) => {
                return (
                  <th width="15%" key={column} data-tip={tooltip(column)} onClick={() => this.sortBy(column)}>
                    {translate(column)}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {stocks.map((stockData) => {
              const owned = stockIsOwned(stockData.id, ownedStocks);
              return (
                <Stock
                  stockData={
                    reportType === QUARTERLY_REPORT
                      ? { ...stockData, ...stockData.latestInterimReport }
                      : { ...stockData, ...stockData.latestAnnualReport }
                  }
                  key={stockData.id}
                  owned={owned}
                  columnsToShow={columnsToShow}
                  showSingleStock={this.props.showSingleStock}
                  handleClickReport={this.props.handleClickReport}
                  type={type}
                  reportType={reportType}
                />
              );
            })}
          </tbody>
        </table>
        <ReactTooltip />
      </>
    );
  }
}

function getMainColumn(tableType) {
  switch (tableType) {
    case ANNUAL_REPORTS_TABLE:
      return translate(YEAR);
    case INTERIM_REPORTS_TABLE:
      return "Period";
    default:
      return "Aktie";
  }
}

StockTable.defaultProps = {
  type: MULTIPLE_STOCKS_TABLE,
  columnsToShow: [
    ID,
    LAST_PRICE,
    PRICE_EARNINGS_RATIO,
    DIRECT_YIELD,
    VOLATILITY,
  ],
};

export default StockTable;
