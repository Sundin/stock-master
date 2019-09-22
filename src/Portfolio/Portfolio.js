import React from "react";
import { getPortfolios } from "./dataRetriever";
import {
  getPortfolioValue,
  portfolioRatioIsGood,
  numberOfStocksIsGood,
  getStockValue
} from "./portfolioUtils";

var classNames = require("classnames");

class Portfolio extends React.Component {
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
        <h1>Alla portföljer</h1>
        <table>
          <thead>
            <tr>
              <th width="40%">Portfölj</th>
              <th width="30%">Andel</th>
              <th width="30%">Antal innehav</th>
            </tr>
          </thead>
          <tbody>
            {this.state.portfolios.map(portfolioData => (
              <PortfolioRow
                portfolioData={portfolioData}
                totalPortfolioValue={this.getTotalPortfolioValue()}
                key={portfolioData.id}
              />
            ))}
          </tbody>
        </table>

        {this.state.portfolios.map(portfolioData => (
          <PortfolioDetails
            portfolioData={portfolioData}
            key={portfolioData.id}
          />
        ))}
      </div>
    );
  }
}

function PortfolioRow(props) {
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

function PortfolioDetails(props) {
  const { portfolioData } = props;
  const {
    minRatioOfEachShareInPortfolio,
    maxRatioOfEachShareInPortfolio
  } = portfolioData.strategy;

  return (
    <div>
      <h2>{portfolioData.name}</h2>
      <table>
        <thead>
          <tr>
            <th width="20%">ID</th>
            <th width="50%">Aktie</th>
            <th width="30%">Andel av portfölj</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.stocks.map(stock => (
            <StockRow
              stock={stock}
              portfolioValue={getPortfolioValue(portfolioData)}
              minRatio={minRatioOfEachShareInPortfolio}
              maxRatio={maxRatioOfEachShareInPortfolio}
              key={stock.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function stockRatioIsGood(stockRatio, minRatio, maxRatio) {
  return stockRatio >= minRatio && stockRatio <= maxRatio;
}

function StockRow(props) {
  const { stock, portfolioValue, minRatio, maxRatio } = props;

  const stockRatio = (getStockValue(stock) / portfolioValue) * 100;
  return (
    <tr key={stock.id}>
      <td>{stock.id}</td>
      <td>{stock.name}</td>
      <td
        className={classNames({
          good: stockRatioIsGood(stockRatio, minRatio, maxRatio),
          bad: !stockRatioIsGood(stockRatio, minRatio, maxRatio)
        })}
      >
        {stockRatio.toFixed(2)}%
      </td>
    </tr>
  );
}

export default Portfolio;
