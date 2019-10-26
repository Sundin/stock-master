import raytheon from "./stocks/raytheon";
import northrupGrumman from "./stocks/northrupGrumman";
import generalDynamics from "./stocks/generalDynamics";

function getAllStocks() {
  let stocks = {};
  stocks[raytheon.id] = raytheon;
  stocks[northrupGrumman.id] = northrupGrumman;
  stocks[generalDynamics.id] = generalDynamics;
  return stocks;
}

export function getStockDetails(id) {
  let stockDetails = getAllStocks()[id];
  stockDetails.revenuePerEmployee = formatNumber(
    stockDetails.revenue / stockDetails.numberOfEmployees
  );
  stockDetails.revenue = formatNumber(stockDetails.revenue);
  return stockDetails;
}

function formatNumber(number) {
  let formattedNumber = number.toPrecision(3);

  if (formattedNumber.includes("e+5")) {
    formattedNumber = formattedNumber.replace("e+5", "000").replace(".", "");
  } else if (formattedNumber.includes("e+10")) {
    formattedNumber = formattedNumber
      .replace("e+10", "00 milj")
      .replace(".", "");
  }

  return formattedNumber;
}
