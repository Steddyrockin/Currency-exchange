// services/profitService.js

async function calculateDailyProfit(trades) {

  let profit = 0;

  trades.forEach(trade => {
    profit += trade.profit;
  });

  return profit;
}

function calculatePayout(profit) {

  if (profit <= 0) return 0;

  return profit * 0.30; // always 30%
}

module.exports = {
  calculateDailyProfit,
  calculatePayout
};