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
import { getAllOwnedStocks } from "../Portfolio/portfolioUtils";
import { stockIsOwned } from "../stockUtils";

const classNames = require("classnames");

class BestYield extends React.Component {
  state = {
    stocks: [],
    ownedStocks: [],
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

    getAllOwnedStocks().then(ownedStocks => {
      this.setState({
        ownedStocks: ownedStocks
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
            {this.state.stocks.map(stockData => {
              const owned = stockIsOwned(stockData.id, this.state.ownedStocks);
              return (
                <Stock stockData={stockData} key={stockData.id} owned={owned} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function Stock(props) {
  const { stockData, owned } = props;
  const { priceEarningsRatio, directYield, volatility } = stockData;

  return (
    <tr key={stockData.id}>
      <td
        className={classNames({
          owned: owned
        })}
      >
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
          owned: owned
        })}
      >
        {priceEarningsRatio}
      </td>
      <td
        className={classNames({
          good: yieldIsGood(stockData),
          veryGood: yieldIsVeryGood(stockData),
          owned: owned
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
          owned: owned
        })}
      >
        {volatility}
      </td>
    </tr>
  );
}

export default BestYield;
