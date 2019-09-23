export function stockIsOwned(stockId, ownedStocks) {
  let found = false;
  ownedStocks.forEach(stock => {
    if (stock.id === stockId) {
      console.log("yes", stock.id);
      found = true;
      return;
    }
  });
  console.log("no", stockId);
  return found;
}
