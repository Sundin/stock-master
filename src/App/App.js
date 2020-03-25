import React from "react";
import "./App.css";
import BestYield from "../BestYield/BestYield";
import BlueChip from "../BlueChip/BlueChip";
import Portfolio from "../Portfolio/Portfolio";
import Weapons from "../Weapons/Weapons";
import SingleStock from "../SingleStock/SingleStock";
import Industry from "../Industry/Industry";
import Forest from "../Forest/Forest";
import Invest from "../Invest/Invest";
import RealEstate from "../RealEstate/RealEstate";
import Bank from "../Bank/Bank";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";
const blueChipPage = "BLUE_CHIP_PAGE";
const weaponsPage = "WEAPONS_PAGE";
const industryPage = "INDUSTRY_PAGE";
const forestPage = "FOREST_PAGE";
const investPage = "INVEST_PAGE";
const realEstatePage = "REAL_ESTATE_PAGE";
const bankPage = "BANK_PAGE";

const classNames = require("classnames");

class App extends React.Component {
  state = {
    activePage: bestYieldPage,
    activeStock: null,
    columnsToShow: []
  };

  renderActivePage() {
    if (this.state.activeStock) {
      return (
        <SingleStock
          id={this.state.activeStock}
          columnsToShow={this.state.columnsToShow}
        />
      );
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
      case industryPage:
        return <Industry showSingleStock={this.showSingleStock.bind(this)} />;
      case forestPage:
        return <Forest showSingleStock={this.showSingleStock.bind(this)} />;
      case investPage:
        return <Invest showSingleStock={this.showSingleStock.bind(this)} />;
      case realEstatePage:
        return <RealEstate showSingleStock={this.showSingleStock.bind(this)} />;
      case bankPage:
        return <Bank showSingleStock={this.showSingleStock.bind(this)} />;
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

  showSingleStock(id, columnsToShow) {
    this.setState({ activeStock: id, columnsToShow: columnsToShow });
  }

  render() {
    return (
      <div>
        <h1>BisseNisse</h1>
        {this.renderButton("Portfolio", portfolioPage)}
        {this.renderButton("Utdelningsaktier", bestYieldPage)}
        {this.renderButton("Basaktier", blueChipPage)}
        {this.renderButton("Verkstad", industryPage)}
        {this.renderButton("Skog", forestPage)}
        {this.renderButton("Investment", investPage)}
        {this.renderButton("Fastigheter", realEstatePage)}
        {this.renderButton("Vapen", weaponsPage)}
        {this.renderButton("Bank", bankPage)}
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
