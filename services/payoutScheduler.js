const cron = require("node-cron")
const portfolio = require("../models/portfolioModel")

cron.schedule("59 23 * * *",()=>{

const payout = portfolio.dailyProfit * 0.30

console.log("Daily payout to JPMorgan:",payout)

portfolio.balance -= payout

portfolio.dailyProfit = 0

})