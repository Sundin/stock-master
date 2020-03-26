import { BASE_URL } from "../constants";

const rp = require("request-promise-native");

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
      resolve(parsedData);
    });
  });
}
