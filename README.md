├── README.md
├── LICENSE
├── .gitignore
├── .env.example
│
├── frontend/
│   ├── package.json
│   ├── public/
│   └── src/
│       ├── index.js
│       ├── App.js
│       │
│       ├── components/
│       │   ├── Login/
│       │   │   ├── Login.js
│       │   │   └── Login.css
│       │   │
│       │   ├── Dashboard/
│       │   │   ├── Dashboard.js
│       │   │   └── Dashboard.css
│       │   │
│       │   ├── Converter/
│       │   │   ├── CurrencyConverter.js
│       │   │
│       │   └── Market/
│       │       ├── MarketOverview.js
│       │
│       ├── services/
│       │   ├── api.js
│       │   ├── auth.js
│       │   └── exchangeRates.js
│       │
│       └── styles/
│           └── global.css
│
├── backend/
│   ├── server.js
│   ├── package.json
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── currencyRoutes.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── currencyController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   └── services/
│       └── exchangeService.js
│
├── ai-engine/
│   ├── app.py
│   ├── requirements.txt
│   ├── models/
│   │   ├── lstm.py
│   │   └── volatility.py
│   └── signal_engine.py
│
└── docker-compose.yml