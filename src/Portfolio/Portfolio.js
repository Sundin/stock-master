import React from "react";
import { getPortfolios } from "../avanza";
import { getPortfolioValue } from "./portfolioUtils";

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
              <th>Värde</th>
              <th>Antal innehav</th>
            </tr>
          </thead>
          <tbody>
            {this.state.portfolios.map(portfolioData => (
              <Portfolio portfolioData={portfolioData} key={portfolioData.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function Portfolio(props) {
  const { portfolioData } = props;
  const portfolioValue = getPortfolioValue(portfolioData);
  return (
    <tr key={portfolioData.id}>
      <td>{portfolioData.name}</td>
      <td>{portfolioValue}</td>
      <td>{portfolioData.stocks.length}</td>
    </tr>
  );
}

export default BestYield;
