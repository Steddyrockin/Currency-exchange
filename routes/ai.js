const router = require("express").Router()
const { runAI } = require("../services/ai")

router.post("/run", (req,res)=>{
  runAI()
  res.json({ success:true })
})

module.exports = router
