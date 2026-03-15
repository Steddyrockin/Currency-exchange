const express = require("express")
const app = express()

app.use(express.json())

app.use("/api/health", require("./routes/health"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/stripe", require("./routes/stripe"))
app.use("/api/portfolio", require("./routes/portfolio"))
app.use("/api/ai", require("./routes/ai"))

module.exports = app