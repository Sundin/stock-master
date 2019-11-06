import React from "react";
import "./App.css";
import BestYield from "../BestYield/BestYield";
import BlueChip from "../BlueChip/BlueChip";
import Portfolio from "../Portfolio/Portfolio";
import Weapons from "../Weapons/Weapons";
import SingleStock from "../SingleStock/SingleStock";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";
const blueChipPage = "BLUE_CHIP_PAGE";
const weaponsPage = "WEAPONS_PAGE";

const classNames = require("classnames");

class App extends React.Component {
  state = {
    activePage: portfolioPage,
    activeStock: null
  };

  renderActivePage() {
    if (this.state.activeStock) {
      return <SingleStock id={this.state.activeStock} />;
    }

    switch (this.state.activePage) {
      case portfolioPage:
        return <Portfolio showSingleStock={this.showSingleStock.bind(this)} />;
      case bestYieldPage:
        return <BestYield showSingleStock={this.showSingleStock.bind(this)} />;
      case blueChipPage:
        return <BlueChip showSingleStock={this.showSingleStock.bind(this)} />;
      case weaponsPage:
        return <Weapons showSingleStock={this.showSingleStock.bind(this)} />;
      default:
        return <div></div>;
    }
  }

  renderButton(title, page) {
    return (
      <button
        onClick={() => {
          this.setState({ activePage: page, activeStock: null });
        }}
        className={classNames({
          active: this.state.activePage === page
        })}
      >
        {title}
      </button>
    );
  }

  showSingleStock(id) {
    this.setState({ activeStock: id });
  }

  render() {
    return (
      <div>
        <h1>Stock Master</h1>
        {this.renderButton("Portfolio", portfolioPage)}
        {this.renderButton("Utdelningsaktier", bestYieldPage)}
        {this.renderButton("Basaktier", blueChipPage)}
        {this.renderButton("Vapen", weaponsPage)}
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
