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

class StockTable extends React.Component {
  render() {
    const { stocks, ownedStocks, sortKey, type, reportType } = this.props;

    if (sortKey) {
      stocks.sort((a, b) => {
        return b[sortKey] - a[sortKey];
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
              <th width="40%">{getMainColumn(type)}</th>
              {columnsToShow.map((column) => {
                return (
                  <th width="15%" key={column} data-tip={tooltip(column)} onClick={() => console.log(column)}>
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
