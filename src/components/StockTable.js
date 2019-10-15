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

function StockTable(props) {
  const { stocks, ownedStocks } = props;

  return (
    <table>
      <thead>
        <tr>
          <th width="15%">ID</th>
          <th width="40%">Aktie</th>
          <th width="15%">P/E</th>
          <th width="15%">Direktavkastning</th>
          <th width="15%">Volatilitet</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map(stockData => {
          const owned = stockIsOwned(stockData.id, ownedStocks);
          return (
            <Stock stockData={stockData} key={stockData.id} owned={owned} />
          );
        })}
      </tbody>
    </table>
  );
}

function Stock(props) {
  const { stockData, owned } = props;
  const { priceEarningsRatio, directYield, volatility } = stockData;

  return (
    <tr key={stockData.id}>
      <td>
        {stockData.id}
      </td>
      <td
        className={classNames({
          owned: owned
        })}
      >
        {stockData.name}
      </td>
      <td
        className={classNames({
          good: peIsGood(stockData),
          veryGood: peIsVeryGood(stockData),
          veryBad: peIsVeryBad(stockData),
        })}
      >
        {priceEarningsRatio}
      </td>
      <td
        className={classNames({
          good: yieldIsGood(stockData),
          veryGood: yieldIsVeryGood(stockData),
        })}
      >
        {directYield}
      </td>
      <td
        className={classNames({
          good: volatilityIsGood(stockData),
          veryGood: volatilityIsVeryGood(stockData),
          bad: volatilityIsBad(stockData),
          veryBad: volatilityIsVeryBad(stockData),
        })}
      >
        {volatility}
      </td>
    </tr>
  );
}

export default StockTable;
