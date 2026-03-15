const {
  getPortfolio,
  setAllocations,
  setProfit
} = require("./portfolio")

function runAI() {

const portfolio = getPortfolio()

const trades = 11
const allocation = portfolio.balance / trades

const allocations = Array(trades).fill(allocation)

setAllocations(allocations)

// Simulated profit (replace with LSTM later)
const profit = Math.random() * 1000
setProfit(profit)

return true

}

module.exports = { runAI }
