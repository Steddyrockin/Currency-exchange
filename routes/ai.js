const router = require("express").Router()
const store = require("../state/store")

router.post("/run", (req, res) => {

  const movement = (Math.random() - 0.4) * 5

  if (movement > 0) {
    store.portfolio.balance += movement
    store.portfolio.totalEarned += movement
  }

  store.transactions.push({
    type: "AI_TRADE",
    amount: movement.toFixed(2),
    status: movement > 0 ? "PROFIT" : "HOLD",
    time: new Date().toISOString()
  })

  res.json({ success: true, movement })

})

module.exports = router