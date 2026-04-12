const router = require("express").Router()

let ledger = {
  balance: 0,
  history: []
}

router.post("/send",(req,res)=>{

  const { amount, to } = req.body

  if(amount > ledger.balance){
    return res.status(400).json({error:"Insufficient funds"})
  }

  ledger.balance -= amount

  ledger.history.push({
    type:"SEND",
    amount,
    to,
    time:new Date()
  })

  res.json({status:"sent", ledger})

})

module.exports = router