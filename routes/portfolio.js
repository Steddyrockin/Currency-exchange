const router = require("express").Router()
const { getPortfolio } = require("../services/portfolio")

router.get("/", (req,res)=>{
  res.json(getPortfolio())
})

module.exports = router
