function calculateProfit(before, after) {
  return after - before;
}

function calculatePayout(profit) {
  if (profit <= 0) return 0;
  return profit * 0.30;
}

module.exports = { calculateProfit, calculatePayout };