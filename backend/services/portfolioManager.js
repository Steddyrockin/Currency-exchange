let portfolio = {
balance:0,
dailyProfit:0,
allocations:[]
}

function getPortfolio(){
return portfolio
}

function updateBalance(amount){
portfolio.balance += amount
}

module.exports = {
getPortfolio,
updateBalance
}
