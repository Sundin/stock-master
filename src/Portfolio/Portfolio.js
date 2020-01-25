import React from "react";
import { getPortfolios } from "./dataRetriever";
import {
  getPortfolioValue,
  portfolioRatioIsGood,
  numberOfStocksIsGood,
  getStockValue
} from "./portfolioUtils";
import { PRICE_EARNINGS_RATIO } from "../constants";

var classNames = require("classnames");

class Portfolio extends React.Component {
  state = {
    portfolios: [],
    error: null
  };

  // componentDidMount() {
  //   getPortfolios()
  //     .then(portfolios => {
  //       this.setState({
  //         portfolios: portfolios
  //       });
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       this.setState({
  //         error: err.message
  //       });
  //     });
  // }

  getTotalPortfolioValue() {
    return this.state.portfolios.reduce((sum, portfolio) => {
      return sum + getPortfolioValue(portfolio);
    }, 0);
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    const sectors = getSectors(this.state.portfolios);
    let sortedSectors = [];
    Object.keys(sectors).forEach(sector => {
      sortedSectors.push({
        name: sector,
        value: (sectors[sector] / this.getTotalPortfolioValue()) * 100
      });
    });
    sortedSectors = sortedSectors.sort(function(a, b) {
      return a.value < b.value ? 1 : b.value < a.value ? -1 : 0;
    });

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

        <h2>Branschfördelning</h2>
        <table>
          <thead>
            <tr>
              <th width="40%">Bransch</th>
              <th width="30%">Andel</th>
            </tr>
          </thead>
          <tbody>
            {sortedSectors.map(sector => (
              <tr>
                <td>{sector.name}</td>
                <td>{sector.value.toFixed(2)}%</td>
              </tr>
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

function getSectors(portfolios) {
  let sectors = {};
  portfolios.forEach(portfolioData => {
    portfolioData.stocks.forEach(stock => {
      if (!sectors[stock.sector]) {
        sectors[stock.sector] = 0;
      }
      sectors[stock.sector] += stock.amount * stock.lastPrice;
    });
  });
  return sectors;
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
            <th width="10%">ID</th>
            <th width="30%">Aktie</th>
            <th width="20%">Andel av portfölj</th>
            <th widrth="30%">Bransch</th>
            <th widrth="10%">P/E</th>
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
      <td>{stock.sector}</td>
      <td>{stock[PRICE_EARNINGS_RATIO]}</td>
    </tr>
  );
}

export default Portfolio;
