// server.js

const express = require("express");
const http = require("http");
const WebSocket = require("ws");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/currency", require("./routes/currencyRoutes"));
app.use("/api/trade", require("./routes/tradeRoutes"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ status: "Connected to Market Stream" }));
});

server.listen(5000, () =>
  console.log("Currency Exchange running on port 5000")
);