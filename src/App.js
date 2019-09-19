import React from 'react';
import './App.css';
import getStock from './avanza';

class App extends React.Component {

  state = {
    stockName: 'Loading',
    priceEarningsRatio: '-',
          directYield: '-'
  };

  componentDidMount() {
    getStock('5284')
      .then((data) => {
        const parsedData = JSON.parse(data); 
        this.setState({
          stockName: parsedData.company.name,
          priceEarningsRatio:parsedData.keyRatios.priceEarningsRatio,
          directYield:parsedData.keyRatios.directYield
        });
      })
      .catch((err) => {
        console.error(err);
        this.setState({
          stockName: err.message
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Hello, Linni!</h1>
        <h2>{this.state.stockName}.</h2>
        <p>P/E: {this.state.priceEarningsRatio}</p>
        <p>Direktavkastning: {this.state.directYield}</p>
      </div>
    );
  }
}

export default App;
