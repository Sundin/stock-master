import { BASE_URL } from "./constants";

const rp = require("request-promise-native");
const { formatAllFields } = require("./api/formatAllFields");

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
