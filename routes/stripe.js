const express = require("express")
const router = express.Router()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

router.post("/deposit",async(req,res)=>{

const {amount} = req.body

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[{
price_data:{
currency:"usd",
product_data:{name:"Currency Exchange Deposit"},
unit_amount:Math.round(amount*100)
},
quantity:1
}],

mode:"payment",

success_url:"http://localhost:3000",
cancel_url:"http://localhost:3000"

})

res.json({id:session.id})

})

module.exports = router