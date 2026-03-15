require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("frontend"))

app.use("/api/health", require("./routes/health"))
app.use("/api/portfolio", require("./routes/portfolio"))
app.use("/api/ai", require("./routes/ai"))
app.use("/api/stripe", require("./routes/stripe"))

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>
  console.log("Currency Exchange running on port", PORT)
)
