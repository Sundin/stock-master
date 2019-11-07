import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";
import generalDynamics from "./stocks/generalDynamics";
import lockheedMartin from "./stocks/lockheedMartin";

import { formatAllFields } from "./formatAllFields";
import { calculateKPIs } from "./calculateKPIs";

function getAllStocks() {
  let stocks = {};
  stocks[raytheon.id] = raytheon;
  stocks[northrupGrumman.id] = northrupGrumman;
  stocks[generalDynamics.id] = generalDynamics;
  stocks[lockheedMartin.id] = lockheedMartin;
  return stocks;
}

export function getStockDetails(id, basicStockData) {
  let stockDetails = {
    ...getAllStocks()[id]
  };
  let basicData = { ...basicStockData };

  // TODO: sort reports

  if (stockDetails.annualReports) {
    stockDetails.annualReports = stockDetails.annualReports
      .map(report => calculateKPIs(report, basicData))
      .map(report => formatAllFields(report));
  }

  if (stockDetails.interimReports) {
    stockDetails.interimReports = stockDetails.interimReports
      .map(report => calculateKPIs(report, basicData))
      .map(report => formatAllFields(report));
  }

  const latestReport = stockDetails.annualReports
    ? stockDetails.annualReports[0]
    : {};

  stockDetails = {
    ...stockDetails,
    ...latestReport
  };

  return stockDetails;
}
