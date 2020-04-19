import {
  OPERATING_MARGIN,
  REVENUE_PER_SHARE,
  REVENUE_PER_EMPLOYEE,
  REVENUE,
  NUMBER_OF_EMPLOYEES,
  VOLATILITY,
  DIRECT_YIELD,
  PRICE_SALES_RATIO,
  PRICE_EARNINGS_RATIO,
  TOTAL_ASSETS,
  EARNINGS_PER_SHARE,
  PRICE_BOOK_VALUE,
  SOLIDITY,
  MARKET_CAP,
  YEAR,
  ID,
  EBIT,
  NET_EARNINGS,
  RETURN_ON_EQUITY,
  RETURN_ON_CAPITAL_EMPLOYED,
  TOTAL_EQUITY,
  TOTAL_DEBT,
  NET_ASSET_VALUE
} from "./constants";

export function translate(key) {
  switch (key) {
    case PRICE_EARNINGS_RATIO:
      return "P/E";
    case PRICE_SALES_RATIO:
      return "P/S";
    case DIRECT_YIELD:
      return "Direktavkastning (%)";
    case VOLATILITY:
      return "Volatilitet";
    case NUMBER_OF_EMPLOYEES:
      return "Anställda";
    case REVENUE:
      return "Omsättning";
    case REVENUE_PER_EMPLOYEE:
      return "Omsättning / anställd";
    case REVENUE_PER_SHARE:
      return "Omsättning / aktie";
    case OPERATING_MARGIN:
      return "Rörelsemarginal (%)";
    case TOTAL_ASSETS:
      return "Tillgångar";
    case TOTAL_EQUITY:
      return "Eget kapital";
    case TOTAL_DEBT:
      return "Skuld";
    case EARNINGS_PER_SHARE:
      return "EPS";
    case PRICE_BOOK_VALUE:
      return "P/B";
    case SOLIDITY:
      return "Soliditet (%)";
    case MARKET_CAP:
      return "Börsvärde";
    case YEAR:
      return "År";
    case ID:
      return "ID";
    case EBIT:
      return "EBIT";
    case NET_EARNINGS:
      return "Vinst";
    case RETURN_ON_EQUITY:
      return "ROE (%)";
    case RETURN_ON_CAPITAL_EMPLOYED:
      return "ROCE (%)";
    case NET_ASSET_VALUE:
      return "Substansvärde";
    default:
      return "";
  }
}
