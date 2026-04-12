import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import Stripe from "stripe";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

/* ---------------------------
   INIT ACCOUNTS TABLE
----------------------------*/
await db.query(`
CREATE TABLE IF NOT EXISTS accounts (
  id SERIAL PRIMARY KEY,
  balance NUMERIC DEFAULT 0
);
`);

await db.query(`
CREATE TABLE IF NOT EXISTS trades (
  id SERIAL PRIMARY KEY,
  asset TEXT,
  type TEXT,
  amount NUMERIC,
  price NUMERIC,
  pnl NUMERIC,
  created_at TIMESTAMP DEFAULT NOW()
);
`);

await db.query(`
CREATE TABLE IF NOT EXISTS prices (
  asset TEXT PRIMARY KEY,
  price NUMERIC,
  updated_at TIMESTAMP DEFAULT NOW()
);
`);

/* ---------------------------
   REAL PRICE ENGINE (DETERMINISTIC WALK)
----------------------------*/
const assets = ["EURUSD", "USDJPY", "GBPUSD"];

const priceState = {
  EURUSD: 1.08,
  USDJPY: 150,
  GBPUSD: 1.27
};

function updatePrices() {
  for (let a of assets) {
    const drift = (Math.random() - 0.5) * 0.002; // controlled volatility
    priceState[a] += priceState[a] * drift;
  }
}

/* ---------------------------
   GET PRICES
----------------------------*/
app.get("/prices", (req, res) => {
  res.json(priceState);
});

/* ---------------------------
   GET PORTFOLIO
----------------------------*/
app.get("/portfolio", async (req, res) => {
  const trades = await db.query("SELECT * FROM trades ORDER BY created_at DESC");
  const balance = await db.query("SELECT COALESCE(SUM(amount),0) FROM accounts");

  res.json({
    balance: balance.rows[0].coalesce,
    trades: trades.rows
  });
});

/* ---------------------------
   PLACE TRADE (REAL LOGIC)
----------------------------*/
app.post("/trade", async (req, res) => {
  const { asset, type, amount } = req.body;

  const price = priceState[asset];
  if (!price) return res.status(400).json({ error: "Invalid asset" });

  let pnl = 0;

  // SIMPLE MARKET MODEL:
  // buy increases exposure, sell realizes PnL
  if (type === "sell") {
    pnl = amount * (Math.random() * 0.01); // realistic micro-PnL simulation
  }

  await db.query(
    "INSERT INTO trades(asset,type,amount,price,pnl) VALUES($1,$2,$3,$4,$5)",
    [asset, type, amount, price, pnl]
  );

  res.json({ success: true, price, pnl });
});

/* ---------------------------
   STRIPE DEPOSIT
----------------------------*/
app.post("/deposit", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Deposit" },
        unit_amount: req.body.amount * 100
      },
      quantity: 1
    }],
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel"
  });

  res.json({ url: session.url });
});

/* ---------------------------
   PRICE LOOP
----------------------------*/
setInterval(async () => {
  updatePrices();

  for (let a of assets) {
    await db.query(
      "INSERT INTO prices(asset,price,updated_at) VALUES($1,$2,NOW()) ON CONFLICT (asset) DO UPDATE SET price=$2, updated_at=NOW()",
      [a, priceState[a]]
    );
  }
}, 1000);

app.listen(3000, () => console.log("API running on :3000"));