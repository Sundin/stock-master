import { BASE_URL } from "../constants";

const rp = require("request-promise-native");
const { formatAllFields } = require("../api/formatAllFields");

export function saveReport(id, data) {
  return new Promise((resolve, reject) => {
    rp({
      method: "PUT",
      uri: `${BASE_URL}/stock/${id}/reports`,
      body: data,
      json: true
    }).then(returnData => {
      resolve(returnData);
    });
  });
}

export function getStockData(id) {
  return new Promise((resolve, reject) => {
    rp({
      uri: `${BASE_URL}/stock/${id}`
    }).then(returnData => {
      let parsedData = JSON.parse(returnData);
      parsedData = formatAllFields(parsedData);

      if (parsedData.interimReports) {
        parsedData.interimReports = parsedData.interimReports.map(report =>
          formatAllFields(report)
        );
      }

      if (parsedData.annualReports) {
        parsedData.annualReports = parsedData.annualReports.map(report =>
          formatAllFields(report)
        );
      }

      resolve(parsedData);
    });
  });
}
