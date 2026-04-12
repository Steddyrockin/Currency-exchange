const router = require("express").Router()
const store = require("../state/store")

router.get("/", (req, res) => {
  res.json(store.portfolio)
})

router.post("/distribute", (req, res) => {

  const rows = 11
  const allocation = store.portfolio.balance / rows

  store.portfolio.allocations = Array(rows).fill(allocation)

  const payout = store.portfolio.balance * 0.30

  store.transactions.push({
    type: "PAYOUT",
    amount: payout.toFixed(2),
    status: "SENT",
    time: new Date().toISOString()
  })

  res.json({
    payout,
    allocations: store.portfolio.allocations
  })

})

module.exports = router