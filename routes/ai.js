const express = require("express")

const router = express.Router()

router.post("/run",(req,res)=>{

console.log("AI trading engine started")

res.json({status:"running"})

})

module.exports = router