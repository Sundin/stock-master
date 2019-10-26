import React from "react";
import "./App.css";
import BestYield from "../BestYield/BestYield";
import BlueChip from "../BlueChip/BlueChip";
import Portfolio from "../Portfolio/Portfolio";
import Weapons from "../Weapons/Weapons";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";
const blueChipPage = "BLUE_CHIP_PAGE";
const weaponsPage = "WEAPONS_PAGE";

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
      case weaponsPage:
        return <Weapons />;
      default:
        return <div></div>;
    }
  }

  renderButton(title, page) {
    return (
      <button
        onClick={() => {
          this.setState({ activePage: page });
        }}
        className={classNames({
          active: this.state.activePage === page
        })}
      >
        {title}
      </button>
    );
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
