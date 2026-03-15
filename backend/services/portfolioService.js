let portfolio = {
  balance: 0,
  dailyProfit: 0,
  allocations: []
}

function getPortfolio() {
  return portfolio
}

function updateBalance(amount) {
  portfolio.balance += amount
}

function setAllocations(allocations) {
  portfolio.allocations = allocations
}

module.exports = {
  getPortfolio,
  updateBalance,
  setAllocations
}
