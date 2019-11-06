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

const classNames = require("classnames");

function StockTable(props) {
  const { stocks, ownedStocks, sortKey, columnsToShow } = props;

  if (sortKey) {
    stocks.sort((a, b) => {
      return b[sortKey] - a[sortKey];
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th width="15%">ID</th>
          <th width="40%">Aktie</th>
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
            />
          );
        })}
      </tbody>
    </table>
  );
}

class Stock extends React.Component {
  handleClick() {
    this.props.showSingleStock(this.props.stockData.id);
  }

  render() {
    const { stockData, owned, columnsToShow } = this.props;

    return (
      <tr key={stockData.id}>
        <td>{stockData.id}</td>
        <td
          className={classNames({
            owned: owned
          })}
        >
          <a href="#" onClick={e => this.handleClick(e)}>
            {stockData.name}
          </a>
        </td>
        {columnsToShow.map(column => {
          return (
            <td
              width="15%"
              key={column}
              className={getClassNames(column, stockData)}
            >
              {stockData[column]}
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
  columnsToShow: ["priceEarningsRatio", "directYield", "volatility"]
};

export default StockTable;
