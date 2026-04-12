const router = require("express").Router()
const jwt = require("jsonwebtoken")

router.post("/login",(req,res)=>{

  // simple demo login (replace later)
  const user = { id:1 }

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn:"7d"
  })

  res.json({token})

})

module.exports = router