require("dotenv").config()

const express = require("express")
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

let portfolio = {
balance:0,
dailyProfit:0,
allocations:[]
}


// STRIPE DEPOSIT

app.post("/api/stripe/deposit", async (req,res)=>{

const {amount} = req.body

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[
{
price_data:{
currency:"usd",
product_data:{name:"Currency Exchange Deposit"},
unit_amount:Math.round(amount*100)
},
quantity:1
}
],

mode:"payment",

success_url:"http://localhost:3000?success=true",
cancel_url:"http://localhost:3000?cancel=true"

})

res.json({id:session.id})

})


// PORTFOLIO

app.get("/api/portfolio",(req,res)=>{
res.json(portfolio)
})


// DISTRIBUTE FUNDS

app.post("/api/portfolio/distribute",(req,res)=>{

const rows = 11
const allocation = portfolio.balance/rows

portfolio.allocations = []

for(let i=0;i<rows;i++){
portfolio.allocations.push(allocation)
}

res.json({status:"distributed"})

})


// AI ENGINE

app.post("/api/ai/run",(req,res)=>{
console.log("AI Trading Started")
res.json({status:"running"})
})


// FACEBOOK AUTH

app.post("/api/auth/facebook",(req,res)=>{

const token = jwt.sign(
{facebook:true},
process.env.JWT_SECRET,
{expiresIn:"7d"}
)

res.json({token})

})


app.listen(process.env.PORT,()=>{
console.log("Server running on",process.env.PORT)
})