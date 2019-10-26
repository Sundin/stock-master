import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";

function getAllStocks() {
  let stocks = {};
  stocks[raytheon.id] = raytheon;
  stocks[northrupGrumman.id] = northrupGrumman;
  return stocks;
}

export function getStockDetails(id) {
  return getAllStocks()[id];
}
