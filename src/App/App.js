import React from "react";
import "./App.css";
import BestYield from "../BestYield/BestYield";
import Portfolio from "../Portfolio/Portfolio";

const portfolioPage = "PORTFOLIO_PAGE";
const bestYieldPage = "BEST_YIELD_PAGE";

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
        >
          Portfolio
        </button>
        <button
          onClick={() => {
            this.setState({ activePage: bestYieldPage });
          }}
        >
          Utdelningsaktier
        </button>
        {this.renderActivePage()}
      </div>
    );
  }
}

export default App;
