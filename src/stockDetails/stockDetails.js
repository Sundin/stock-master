import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";
import generalDynamics from "./stocks/generalDynamics";
import lockheedMartin from "./stocks/lockheedMartin";

import { formatAllFields } from "./formatAllFields";
import { calculateKPIs } from "./calculateKPIs";
import { YEAR, ID, CHANGE_VALUES } from "../constants";
import { calculateChange } from "./calculateChangeValues";

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
    stockDetails.annualReports = stockDetails.annualReports.map(report =>
      calculateKPIs(report, basicData)
    );
    stockDetails.annualReports = stockDetails.annualReports.map(
      (report, index) => {
        if (index >= stockDetails.annualReports.length - 1) {
          return report;
        }
        const changeValues = calculateChange(
          report,
          stockDetails.annualReports[index + 1]
        );
        report[CHANGE_VALUES] = changeValues;
        return report;
      }
    );
    stockDetails.annualReports = stockDetails.annualReports.map(report =>
      formatAllFields(report)
    );
  }

  if (stockDetails.interimReports) {
    stockDetails.interimReports = stockDetails.interimReports.map(report =>
      calculateKPIs(report, basicData)
    );
    stockDetails.interimReports = stockDetails.interimReports.map(
      (report, index) => {
        if (index >= stockDetails.interimReports.length - 1) {
          return report;
        }
        const changeValues = calculateChange(
          report,
          stockDetails.interimReports[index + 1]
        );
        report[CHANGE_VALUES] = changeValues;
        return report;
      }
    );
    stockDetails.interimReports = stockDetails.interimReports.map(report =>
      formatAllFields(report)
    );
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
