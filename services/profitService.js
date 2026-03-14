// backend/services/profitService.js

function calculateProfit(balanceBefore, balanceAfter) {
  return balanceAfter - balanceBefore;
}

function calculatePayout(profit) {
  return profit * 0.30; // 30%
}

module.exports = { calculateProfit, calculatePayout };