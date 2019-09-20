import React from "react";
import "./App.css";
import getAllStocks from "./avanza";

class App extends React.Component {
  state = {
    stocks: [],
    error: null
  };

  componentDidMount() {
    getAllStocks()
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
  }

  renderStock(stockData) {
    return (
      <tr key={stockData.id}>
        <td>{stockData.stockName}</td>
        <td>{stockData.priceEarningsRatio}</td>
        <td>{stockData.directYield}</td>
      </tr>
    );
  }

  render() {
    if (this.state.error != null) {
      return <p>{this.state.error}</p>;
    }

    return (
      <div>
        <h1>Hello!</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Aktie</th>
              <th>P/E</th>
              <th>Direktavkastning</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map(stockData => (
              <Stock stockData={stockData} key={stockData.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function Stock(props) {
  const { stockData } = props;
  console.log("stock", stockData);
  return (
    <tr key={stockData.id}>
      <td>{stockData.id}</td>
      <td>{stockData.name}</td>
      <td>{stockData.keyRatios.priceEarningsRatio}</td>
      <td>{stockData.keyRatios.directYield}</td>
    </tr>
  );
}

export default App;
