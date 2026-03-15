const router = require("express").Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const { updateBalance } = require("../services/portfolio")

router.post("/deposit", async (req,res)=>{

const { amount } = req.body

const payment = await stripe.paymentIntents.create({
  amount: Math.round(amount*100),
  currency:"usd"
})

updateBalance(amount)

res.json({ clientSecret: payment.client_secret })

})

module.exports = router
