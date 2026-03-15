const cron = require("node-cron")
const { getPortfolio } = require("./portfolioService")

function startPayoutScheduler() {

cron.schedule("59 23 * * *", () => {

const portfolio = getPortfolio()
const payout = portfolio.dailyProfit * 0.30

console.log("Sending payout:", payout)

})

}

module.exports = { startPayoutScheduler }
