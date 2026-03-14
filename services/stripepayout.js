const Stripe = require("stripe")

const stripe = new Stripe(process.env.STRIPE_SECRET)

async function payout(amount){

    await stripe.transfers.create({
        amount: Math.floor(amount * 100),
        currency: "usd",
        destination: process.env.STRIPE_ACCOUNT
    })

}

module.exports = payout