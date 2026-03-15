# Currency Exchange

A dynamic AI-assisted currency trading platform designed to analyze global exchange rates, distribute capital across currency pairs, and manage automated portfolio allocations with a simple calculator-style interface.

The system includes a real-time trading dashboard, backend trading services, and infrastructure for automated payouts, risk control, and AI model integration.

---

# Overview

Currency Exchange is built as a modular trading platform that allows users to:

• Add capital for trading
• Distribute funds across currency pairs
• Run an AI trading engine
• Track portfolio balance and allocations
• Monitor live exchange rates
• Execute automated daily profit payouts

The platform is designed for scalability and can evolve into a full institutional trading system with machine learning models and real-time data feeds.

---

# Core Features

### Dynamic Trading Dashboard

* Live currency price updates
* Automatic refresh every second
* Real-time price movement calculations
* Dynamic trade table generation

### Portfolio Management

* Central portfolio balance
* Trade allocation tracking
* Daily profit calculation
* Automated distribution of capital

### AI Trading Engine

* Allocation logic for currency pairs
* Volatility-based strategy support
* Extendable for LSTM or reinforcement learning models

### Risk Management

* Maximum loss guardrails
* Portfolio allocation limits
* Fail-safe trade conditions

### Payments Integration

* Stripe deposit system
* Secure server-side verification
* Capital added directly to portfolio balance

### Automated Payouts

* Daily scheduled payout system
* 30% of profit routed to payout account
* Executed automatically at 11:59 PM

---

# Architecture

The system is structured as a lightweight monorepo with a modular backend.

```
currency-exchange/
│
├── server.js
├── package.json
├── docker-compose.yml
│
├── services/
│   ├── portfolio.js
│   ├── ai.js
│   ├── payout.js
│   └── risk.js
│
├── routes/
│   ├── portfolio.js
│   ├── ai.js
│   ├── stripe.js
│   └── health.js
│
└── frontend/
    ├── index.html
    ├── app.js
    └── styles.css
```

---

# Technology Stack

Frontend

* HTML
* CSS
* JavaScript

Backend

* Node.js
* Express

Infrastructure

* Docker
* Environment variables

Integrations

* Stripe payments
* External forex rate APIs

---

# API Endpoints

### Health Check

```
GET /api/health
```

Returns server status.

---

### Portfolio

```
GET /api/portfolio
```

Returns:

* balance
* dailyProfit
* allocations

---

### AI Engine

```
POST /api/ai/run
```

Runs the trading engine and generates portfolio allocations.

---

### Stripe Deposit

```
POST /api/stripe/deposit
```

Adds funds to the portfolio balance.

Body Example:

```
{
  "amount": 100
}
```

---

# Environment Variables

Create a `.env` file using the template below.

```
PORT=4000
STRIPE_SECRET_KEY=your_key
JWT_SECRET=your_secret
```

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/currency-exchange.git
```

Navigate into the project:

```
cd currency-exchange
```

Install dependencies:

```
npm install
```

Start the server:

```
npm start
```

The application will run on:

```
http://localhost:4000
```

---

# Running with Docker

Build and start the container:

```
docker-compose up --build
```

---

# Development Roadmap

Future upgrades planned for the platform include:

* Live WebSocket market feeds
* Machine learning trading models
* Reinforcement learning optimization
* Multi-currency portfolio support
* Database persistence
* Advanced volatility analysis
* Institutional risk controls
* Automated liquidity routing

---

# Security Considerations

For production environments the following should be implemented:

* HTTPS enforcement
* Rate limiting
* Authentication tokens
* Secure payment verification
* Audit logging
* Environment-based secrets management

---

# License

This project is licensed under the MIT License.

---

# Disclaimer

This project is intended for educational and development purposes. Financial trading involves significant risk and should only be conducted with proper safeguards, regulatory compliance, and professional oversight.

---

# Author

Stedman Cleveland
