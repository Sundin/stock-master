import React from "react";
import { getInterestingYieldStocks } from "./dataRetriever";
import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood,
  volatilityIsGood,
  volatilityIsBad
} from "./stockIndicators";

var classNames = require("classnames");

class BestYield extends React.Component {
  state = {
    stocks: [],
    error: null
  };

  componentDidMount() {
    getInterestingYieldStocks()
      .then(stocks => {
        this.setState({
          stocks: stocks
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>Intressanta utdelningsaktier</h1>
        <table>
          <col width="15%" />
          <col width="40%" />
          <col width="15%" />
          <col width="15%" />
          <col width="15%" />
          <thead>
            <tr>
              <th>ID</th>
              <th>Aktie</th>
              <th>P/E</th>
              <th>Direktavkastning</th>
              <th>Volatilitet</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map(stockData => (
              <Stock stockData={stockData} key={stockData.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function Stock(props) {
  const { stockData } = props;

  const { priceEarningsRatio, directYield, volatility } = stockData;
  return (
    <tr key={stockData.id}>
      <td>{stockData.id}</td>
      <td>{stockData.name}</td>
      <td
        className={classNames({
          good: peIsGood(stockData),
          veryGood: peIsVeryGood(stockData)
        })}
      >
        {priceEarningsRatio}
      </td>
      <td
        className={classNames({
          good: yieldIsGood(stockData),
          veryGood: yieldIsVeryGood(stockData)
        })}
      >
        {directYield}
      </td>
      <td
        className={classNames({
          good: volatilityIsGood(stockData),
          bad: volatilityIsBad(stockData)
        })}
      >
        {volatility}
      </td>
    </tr>
  );
}

export default BestYield;
