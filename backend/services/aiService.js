const { setAllocations, getPortfolio } = require("./portfolioService")

function runAI() {

const portfolio = getPortfolio()

const trades = 11
const allocation = portfolio.balance / trades

const allocations = Array(trades).fill(allocation)

setAllocations(allocations)

portfolio.dailyProfit = Math.random() * 1000

return true

}

module.exports = { runAI }
