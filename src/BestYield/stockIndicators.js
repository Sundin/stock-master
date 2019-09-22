export function yieldIsGood(stockData) {
  const { directYield } = stockData;

  return directYield > getYieldTarget();
}

export function yieldIsVeryGood(stockData) {
  const { directYield } = stockData;
  return directYield > getYieldTarget() * 1.25;
}

export function peIsGood(stockData) {
  const { priceEarningsRatio, directYield } = stockData;

  if (priceEarningsRatio <= 0) {
    return false;
  }

  return 1 / (directYield / 100) >= priceEarningsRatio;
}

export function peIsVeryGood(stockData) {
  const { priceEarningsRatio, directYield } = stockData;
  return (
    peIsGood(stockData) && 1 / (directYield / 100) >= priceEarningsRatio * 2
  );
}

export function peIsVeryBadGood(stockData) {
  const { priceEarningsRatio } = stockData;
  return priceEarningsRatio < 0;
}

function getYieldTarget() {
  // TODO: get tenYearsBondInterest from some API?
  const tenYearsBondInterest = -0.2;
  const riskPremium = 5;
  return tenYearsBondInterest + riskPremium;
}

const averageOMXS30volatility = 21.6;

export function volatilityIsGood(stockData) {
  const { volatility } = stockData;
  return volatility <= averageOMXS30volatility * 0.75;
}

export function volatilityIsVeryGood(stockData) {
  const { volatility } = stockData;
  return volatility <= averageOMXS30volatility * 0.5;
}

export function volatilityIsBad(stockData) {
  const { volatility } = stockData;
  return volatility > averageOMXS30volatility * 1.25;
}

export function volatilityIsVeryBad(stockData) {
  const { volatility } = stockData;
  return volatility > averageOMXS30volatility * 1.9;
}
