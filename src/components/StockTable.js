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

const classNames = require("classnames");

function translate(key) {
  switch (key) {
    case "priceEarningsRatio":
      return "P/E";
    case "directYield":
      return "Direktavkastning";
    case "volatility":
      return "Volatilitet";
    case "numberOfEmployees":
      return "Anställda";
    case "revenue":
      return "Omsättning";
    default:
      return "";
  }
}

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
            />
          );
        })}
      </tbody>
    </table>
  );
}

function Stock(props) {
  const { stockData, owned, columnsToShow } = props;

  return (
    <tr key={stockData.id}>
      <td>{stockData.id}</td>
      <td
        className={classNames({
          owned: owned
        })}
      >
        {stockData.name}
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
