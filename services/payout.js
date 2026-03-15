const cron = require("node-cron")
const { getPortfolio } = require("./portfolio")

function startPayout() {

cron.schedule("59 23 * * *", () => {

const portfolio = getPortfolio()
const payout = portfolio.dailyProfit * 0.30

console.log("Daily payout (30%):", payout)

})

}

module.exports = { startPayout }
