export function stockIsOwned(stockId, ownedStocks) {
  let found = false;
  ownedStocks.forEach(stock => {
    if (stock.id === stockId) {
      found = true;
      return;
    }
  });
  return found;
}
