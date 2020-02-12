const rp = require("request-promise-native");

export function saveStockData(id, data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    rp({
      method: "PUT",
      uri: "https://bissenisse.duckdns.org:443/stock/861076",
      body: data,
      json: true
    }).then(returnData => {
      resolve(returnData);
    });
  });
}
