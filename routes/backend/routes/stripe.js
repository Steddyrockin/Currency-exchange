const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { updateBalance } = require("../services/portfolioService")

router.post("/deposit", async (req, res) => {

try {

const { amount } = req.body

const paymentIntent = await stripe.paymentIntents.create({
  amount: Math.round(amount * 100),
  currency: "usd"
})

updateBalance(amount)

res.json({ success: true, clientSecret: paymentIntent.client_secret })

} catch (err) {

res.status(500).json({ error: err.message })

}

})

module.exports = router
