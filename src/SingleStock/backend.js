const rp = require("request-promise-native");

const BASE_URL = "https://bissenisse.duckdns.org:443";

export function saveReport(id, data) {
  console.log(data);
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
      const parsedData = JSON.parse(returnData);
      console.log(parsedData);
      resolve(parsedData);
    });
  });
}
