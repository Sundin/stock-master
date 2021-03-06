import React from "react";
import ReactTooltip from "react-tooltip";
import WarningIcon from "./icons/WarningIcon";
import {
  yieldIsGood,
  yieldIsVeryGood,
  peIsGood,
  peIsVeryGood,
  volatilityIsGood,
  volatilityIsBad,
  volatilityIsVeryGood,
  volatilityIsVeryBad,
  peIsVeryBad,
} from "./stockIndicators";
import {
  ANNUAL_REPORTS_TABLE,
  INTERIM_REPORTS_TABLE,
  ANNUAL_REPORT,
} from "../constants";
import { formatField } from "../api/formatAllFields";

const classNames = require("classnames");

class Stock extends React.Component {
  handleClick() {
    this.props.showSingleStock(
      this.props.stockData.id,
      this.props.columnsToShow
    );
  }

  handleClickReport(stockdata) {
    this.props.handleClickReport(stockdata);
  }

  renderMainColumn() {
    const { type, stockData, owned, reportType } = this.props;
    switch (type) {
      case ANNUAL_REPORTS_TABLE:
        return (
          <td>
            <a href="#" onClick={() => this.handleClickReport(stockData)}>
              {stockData.year}
            </a>
          </td>
        );
      case INTERIM_REPORTS_TABLE:
        return (
          <td>
            <a href="#" onClick={() => this.handleClickReport(stockData)}>
              {stockData.year} {stockData.period}
            </a>
          </td>
        );
      default:
        return (
          <td
            className={classNames({
              owned: owned,
            })}
          >
            <ReactTooltip />
            <a href="#" onClick={() => this.handleClick()}>
              {stockData.name}
            </a>
            {stockData.currency === "SEK"
              ? ""
              : " (" + stockData.currency + ")"}
            {this.shouldShowOldReportWarning(
              stockData.reportDate,
              reportType
            ) ? (
              <a
                data-tip={
                  "Avser rapport från " +
                  this.formatDate(new Date(stockData.reportDate))
                }
              >
                <WarningIcon width={20} fill="#fa2" />
              </a>
            ) : (
              ""
            )}
          </td>
        );
    }
  }

  formatDate = (d) =>
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2) +
    " .";

  shouldShowOldReportWarning(reportDate, reportType) {
    if (!reportDate) {
      return false;
    }
    const currentTime = new Date().getTime();
    const reportTime = new Date(reportDate).getTime();
    const threeMonthsInMilliseconds = 7889400000;
    const oneYearInMilliseconds = threeMonthsInMilliseconds * 4;
    if (reportType === ANNUAL_REPORT) {
      return currentTime - reportTime > oneYearInMilliseconds;
    }
    return currentTime - reportTime > threeMonthsInMilliseconds;
  }

  renderStockData(column) {
    const { stockData, type } = this.props;
    switch (type) {
      case ANNUAL_REPORTS_TABLE:
      case INTERIM_REPORTS_TABLE:
        const value = formatField(column, stockData[column]);

        if (!stockData.changeValues) {
          return value;
        }
        const changeValue = stockData.changeValues[column];
        if (!changeValue || isNaN(changeValue)) {
          return value;
        }

        const sign = stockData.changeValues[column] > 0 ? "+" : "";
        return value + " (" + sign + stockData.changeValues[column] + "%)";
      default:
        return formatField(column, stockData[column]);
    }
  }

  render() {
    const { stockData, columnsToShow } = this.props;

    return (
      <tr key={stockData.id}>
        {this.renderMainColumn()}
        {columnsToShow.map((column) => {
          return (
            <td
              width="15%"
              key={column}
              className={getClassNames(column, stockData)}
            >
              {this.renderStockData(column)}
            </td>
          );
        })}
      </tr>
    );
  }
}

function getClassNames(key, stockData) {
  switch (key) {
    case "priceEarningsRatio":
      return classNames({
        good: peIsGood(stockData),
        veryGood: peIsVeryGood(stockData),
        veryBad: peIsVeryBad(stockData),
      });
    case "directYield":
      return classNames({
        good: yieldIsGood(stockData),
        veryGood: yieldIsVeryGood(stockData),
      });
    case "volatility":
      return classNames({
        good: volatilityIsGood(stockData),
        veryGood: volatilityIsVeryGood(stockData),
        bad: volatilityIsBad(stockData),
        veryBad: volatilityIsVeryBad(stockData),
      });
    default:
      return classNames({});
  }
}

export default Stock;
