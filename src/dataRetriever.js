const rp = require("request-promise-native");
const { formatAllFields } = require("./api/formatAllFields");

// const BASE_URL = "https://bissenisse.duckdns.org:443";
const BASE_URL = "http://localhost:8080";

export function getStocks(category) {
  return new Promise((resolve, reject) => {
    rp(`${BASE_URL}/category/${category}`).then(stockData => {
      let parsedData = JSON.parse(stockData);
      parsedData.stocks = parsedData.stocks.map(stock => {
        if (stock.interimReports) {
          stock.interimReports = stock.interimReports.map(report =>
            formatAllFields(report)
          );
        }

        if (stock.annualReports) {
          stock.annualReports = stock.annualReports.map(report =>
            formatAllFields(report)
          );
        }

        return formatAllFields(stock);
      });

      resolve(parsedData.stocks);
    });
  });
}
