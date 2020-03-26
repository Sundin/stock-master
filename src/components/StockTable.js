import React from "react";
import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood,
  volatilityIsGood,
  volatilityIsBad,
  volatilityIsVeryGood,
  volatilityIsVeryBad,
  peIsVeryBad
} from "./stockIndicators";
import { stockIsOwned } from "../stockUtils";
import { translate } from "../translate";
import {
  PRICE_EARNINGS_RATIO,
  DIRECT_YIELD,
  VOLATILITY,
  ID,
  ANNUAL_REPORTS_TABLE,
  YEAR,
  MULTIPLE_STOCKS_TABLE,
  INTERIM_REPORTS_TABLE
} from "../constants";

const classNames = require("classnames");

function StockTable(props) {
  const { stocks, ownedStocks, sortKey, columnsToShow, type } = props;

  if (sortKey) {
    stocks.sort((a, b) => {
      return b[sortKey] - a[sortKey];
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th width="40%">{getMainColumn(type)}</th>
          {columnsToShow.map(column => {
            return (
              <th width="15%" key={column}>
                {translate(column)}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {stocks.map(stockData => {
          const owned = stockIsOwned(stockData.id, ownedStocks);
          return (
            <Stock
              stockData={stockData}
              key={stockData.id}
              owned={owned}
              columnsToShow={columnsToShow}
              showSingleStock={props.showSingleStock}
              type={type}
            />
          );
        })}
      </tbody>
    </table>
  );
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

class Stock extends React.Component {
  handleClick() {
    this.props.showSingleStock(
      this.props.stockData.id,
      this.props.columnsToShow
    );
  }

  renderMainColumn() {
    const { type, stockData, owned } = this.props;
    switch (type) {
      case ANNUAL_REPORTS_TABLE:
        return <td>{stockData.year}</td>;
      case INTERIM_REPORTS_TABLE:
        return (
          <td>
            {stockData.year} {stockData.period}
          </td>
        );
      default:
        return (
          <td
            className={classNames({
              owned: owned
            })}
          >
            <a href="#" onClick={e => this.handleClick(e)}>
              {stockData.name}
            </a>
            {stockData.currency === "SEK"
              ? ""
              : " (" + stockData.currency + ")"}
          </td>
        );
    }
  }

  renderStockData(column) {
    const { stockData, type } = this.props;
    switch (type) {
      case ANNUAL_REPORTS_TABLE:
      case INTERIM_REPORTS_TABLE:
        if (stockData.changeValues && stockData.changeValues[column]) {
          const sign = stockData.changeValues[column] > 0 ? "+" : "";
          return (
            stockData[column] +
            " (" +
            sign +
            stockData.changeValues[column] +
            "%)"
          );
        }
        return stockData[column];
      default:
        return stockData[column];
    }
  }

  render() {
    const { stockData, columnsToShow } = this.props;

    return (
      <tr key={stockData.id}>
        {this.renderMainColumn()}
        {columnsToShow.map(column => {
          return (
            <td
              width="15%"
              key={column}
              className={getClassNames(column, stockData)}
            >
              {this.renderStockData(column)}
            </td>
          );
        })}
      </tr>
    );
  }
}

function getClassNames(key, stockData) {
  switch (key) {
    case "priceEarningsRatio":
      return classNames({
        good: peIsGood(stockData),
        veryGood: peIsVeryGood(stockData),
        veryBad: peIsVeryBad(stockData)
      });
    case "directYield":
      return classNames({
        good: yieldIsGood(stockData),
        veryGood: yieldIsVeryGood(stockData)
      });
    case "volatility":
      return classNames({
        good: volatilityIsGood(stockData),
        veryGood: volatilityIsVeryGood(stockData),
        bad: volatilityIsBad(stockData),
        veryBad: volatilityIsVeryBad(stockData)
      });
    default:
      return classNames({});
  }
}

StockTable.defaultProps = {
  type: MULTIPLE_STOCKS_TABLE,
  columnsToShow: [ID, PRICE_EARNINGS_RATIO, DIRECT_YIELD, VOLATILITY]
};

export default StockTable;
