import React from "react";
import { getInterestingYieldStocks } from "./dataRetriever";
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
          veryGood: peIsVeryGood(stockData),
          veryBad: peIsVeryBad(stockData)
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
          veryGood: volatilityIsVeryGood(stockData),
          bad: volatilityIsBad(stockData),
          veryBad: volatilityIsVeryBad(stockData)
        })}
      >
        {volatility}
      </td>
    </tr>
  );
}

export default BestYield;
