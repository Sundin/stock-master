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
  NET_ASSET_VALUE,
  OLLE,
  LAST_PRICE,
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
    case OLLE:
      return "OLLE";
    case LAST_PRICE:
      return "Aktiekurs";
    default:
      return "";
  }
}

export function tooltip(key) {
  switch (key) {
    case PRICE_EARNINGS_RATIO:
      return "Aktiekurs/vinst per aktie";
    case PRICE_SALES_RATIO:
      return "Aktiekurs/omsättning per aktie";
    case DIRECT_YIELD:
      return "Direktavkastning (%)";
    case VOLATILITY:
      return "Volatilitet (%)";
    case NUMBER_OF_EMPLOYEES:
      return "Antal anställda";
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
      return "Vinst per aktie";
    case PRICE_BOOK_VALUE:
      return "Aktiekurs/eget kapital per aktie";
    case SOLIDITY:
      return "Soliditet (%)";
    case MARKET_CAP:
      return "Börsvärde";
    case YEAR:
      return "År";
    case ID:
      return "ID";
    case EBIT:
      return "Vinst före skatt";
    case NET_EARNINGS:
      return "Nettoresultat";
    case RETURN_ON_EQUITY:
      return "Räntabilitet på eget kapital (%)";
    case RETURN_ON_CAPITAL_EMPLOYED:
      return "Räntabilitet på sysselsatt kapital (%)";
    case NET_ASSET_VALUE:
      return "Substansvärde (på börsnoterade innehav)";
    case OLLE:
      return "Aktiekurs/senaste kvartalsomsättningen per aktie x 4";
    case LAST_PRICE:
      return "Aktiekurs (max 4h gammal)";
    default:
      return "";
  }
}
