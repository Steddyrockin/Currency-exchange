require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("frontend"))

app.use("/api/auth",require("./routes/auth"))
app.use("/api/portfolio",require("./routes/portfolio"))
app.use("/api/stripe",require("./routes/stripe"))
app.use("/api/ai",require("./routes/ai"))

require("./scheduler/dailyPayout")

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{

console.log("Currency Exchange Running:",PORT)

})