const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

router.post("/facebook",(req,res)=>{

const token = jwt.sign(
{user:"facebook"},
process.env.JWT_SECRET,
{expiresIn:"7d"}
)

res.json({token})

})

module.exports = router