require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(".")); // serves your frontend

// Stripe (server-only secure key)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/* =========================
   IN-MEMORY STATE
========================= */

let portfolio = {
  balance: 0,
  totalEarned: 0,
  allocations: [],
};

let transactions = [];

/* =========================
   HEALTH CHECK
========================= */

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

/* =========================
   PORTFOLIO
========================= */

app.get("/api/portfolio", (req, res) => {
  res.json(portfolio);
});

/* =========================
   TRANSACTIONS
========================= */

app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

/* =========================
   STRIPE DEPOSIT
========================= */

app.post("/api/stripe/deposit", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.floor(amount * 100),
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // ⚠️ Demo behavior (production should use webhooks)
    portfolio.balance += amount;

    transactions.unshift({
      type: "DEPOSIT",
      amount: amount.toFixed(2),
      status: "SUCCESS",
      time: new Date().toISOString(),
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =========================
   AI TRADING ENGINE
========================= */

app.post("/api/ai/run", (req, res) => {
  const movement = (Math.random() - 0.4) * 5;

  if (movement > 0) {
    portfolio.totalEarned += movement;
    portfolio.balance += movement;
  }

  transactions.unshift({
    type: "AI_TRADE",
    amount: movement.toFixed(2),
    status: movement > 0 ? "PROFIT" : "HOLD",
    time: new Date().toISOString(),
  });

  res.json({
    status: "AI executed",
    change: movement,
  });
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Currency Exchange running on port ${PORT}`);
});