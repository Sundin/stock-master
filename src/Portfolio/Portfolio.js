import React from "react";
import { getPortfolios } from "../avanza";
import {
  getPortfolioValue,
  portfolioRatioIsGood,
  numberOfStocksIsGood
} from "./portfolioUtils";

var classNames = require("classnames");

class BestYield extends React.Component {
  state = {
    portfolios: [],
    error: null
  };

  componentDidMount() {
    getPortfolios()
      .then(portfolios => {
        this.setState({
          portfolios: portfolios
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error: err.message
        });
      });
  }

  getTotalPortfolioValue() {
    return this.state.portfolios.reduce((sum, portfolio) => {
      return sum + getPortfolioValue(portfolio);
    }, 0);
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>Portfolio</h1>
        <table>
          <thead>
            <tr>
              <th>Portfolio</th>
              <th>Andel</th>
              <th>Antal innehav</th>
            </tr>
          </thead>
          <tbody>
            {this.state.portfolios.map(portfolioData => (
              <Portfolio
                portfolioData={portfolioData}
                totalPortfolioValue={this.getTotalPortfolioValue()}
                key={portfolioData.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function Portfolio(props) {
  const { portfolioData, totalPortfolioValue } = props;
  const portfolioRatio =
    (getPortfolioValue(portfolioData) / totalPortfolioValue) * 100;
  return (
    <tr key={portfolioData.id}>
      <td>{portfolioData.name}</td>
      <td
        className={classNames({
          good: portfolioRatioIsGood(portfolioData, totalPortfolioValue),
          bad: !portfolioRatioIsGood(portfolioData, totalPortfolioValue)
        })}
      >
        {portfolioRatio.toFixed(2)}%
      </td>
      <td
        className={classNames({
          good: numberOfStocksIsGood(portfolioData),
          bad: !numberOfStocksIsGood(portfolioData)
        })}
      >
        {portfolioData.stocks.length}
      </td>
    </tr>
  );
}

export default BestYield;
