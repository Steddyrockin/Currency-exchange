const router = require("express").Router()
const Stripe = require("stripe")
const store = require("../state/store")

const stripe = new Stripe(process.env.STRIPE_SECRET)

router.post("/deposit", async (req, res) => {

  const { amount } = req.body

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" })
  }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.floor(amount * 100),
    currency: "usd"
  })

  store.portfolio.balance += amount

  store.transactions.push({
    type: "DEPOSIT",
    amount,
    status: "SUCCESS",
    time: new Date().toISOString()
  })

  res.json({ clientSecret: paymentIntent.client_secret })

})

module.exports = router