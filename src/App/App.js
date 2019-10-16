import React from "react";
import "./App.css";
import BestYield from "../BestYield/BestYield";
import BlueChip from "../BlueChip/BlueChip";
import Portfolio from "../Portfolio/Portfolio";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";
const blueChipPage = "BLUE_CHIP_PAGE";

const classNames = require("classnames");

class App extends React.Component {
  state = {
    activePage: portfolioPage
  };

  renderActivePage() {
    switch (this.state.activePage) {
      case portfolioPage:
        return <Portfolio />;
      case bestYieldPage:
        return <BestYield />;
      case blueChipPage:
        return <BlueChip />;
      default:
        return <div></div>;
    }
  }

  render() {
    return (
      <div>
        <h1>Stock Master</h1>
        <button
          onClick={() => {
            this.setState({ activePage: portfolioPage });
          }}
          className={classNames({
            active: this.state.activePage === portfolioPage
          })}
        >
          Portfolio
        </button>
        <button
          onClick={() => {
            this.setState({ activePage: bestYieldPage });
          }}
          className={classNames({
            active: this.state.activePage === bestYieldPage
          })}
        >
          Utdelningsaktier
        </button>
        <button
          onClick={() => {
            this.setState({ activePage: blueChipPage });
          }}
          className={classNames({
            active: this.state.activePage === blueChipPage
          })}
        >
          Basaktier
        </button>
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
