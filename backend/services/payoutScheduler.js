const cron = require("node-cron")

function startScheduler(){

cron.schedule("59 23 * * *", () => {

// Send 30% profit to JPMorgan Chase
console.log("Executing daily payout...")

})

}

module.exports = { startScheduler }