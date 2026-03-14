const cron = require("node-cron");
const { calculateDailyProfit, calculatePayout } = require("./profitService");
const { sendToBank } = require("./bankService");
const Trade = require("../models/trade");

// run every day at 11:59 PM
cron.schedule("59 23 * * *", async () => {

  console.log("Running daily payout process");

  const today = new Date();
  today.setHours(0,0,0,0);

  const trades = await Trade.find({
    createdAt: { $gte: today }
  });

  const profit = await calculateDailyProfit(trades);

  const payout = calculatePayout(profit);

  if (payout > 0) {

    await sendToBank(payout);

    console.log(`30% payout sent: $${payout}`);

  } else {

    console.log("No profit today. No payout sent.");

  }

});