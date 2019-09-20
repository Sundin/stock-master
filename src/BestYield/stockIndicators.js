export function yieldIsGood(stockData) {
  const { directYield } = stockData.keyRatios;

  return directYield > getYieldTarget();
}

export function yieldIsVeryGood(stockData) {
  const { directYield } = stockData.keyRatios;
  return directYield > getYieldTarget() * 1.25;
}

export function peIsGood(stockData) {
  const { priceEarningsRatio, directYield } = stockData.keyRatios;

  if (priceEarningsRatio <= 0) {
    return false;
  }

  return 1 / (directYield / 100) >= priceEarningsRatio;
}

export function peIsVeryGood(stockData) {
  const { priceEarningsRatio, directYield } = stockData.keyRatios;
  return (
    peIsGood(stockData) && 1 / (directYield / 100) >= priceEarningsRatio * 2
  );
}

function getYieldTarget() {
  const tenYearsBondInterest = -0.2;
  const riskPremium = 5;
  return tenYearsBondInterest + riskPremium;
}
