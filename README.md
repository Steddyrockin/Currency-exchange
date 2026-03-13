# Currency-exchange
currency-exchange-platform/

├── README.md
├── package.json
├── docker-compose.yml
├── .env.example
├── .gitignore
│
├── server.js
│
├── config/
│   └── db.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   └── user.js
│
├── services/
│   ├── exchangeService.js
│   ├── profitService.js
│   ├── bankService.js
│   └── aiService.js
│
├── routes/
│   ├── authRoutes.js
│   ├── currencyRoutes.js
│   └── tradeRoutes.js
│
├── ai/
│   └── signalEngine.py
│
└── frontend/
    ├── package.json
    └── src/
        ├── App.js
        ├── index.js
        ├── styles.css
        └── components/
            ├── Login.js
            ├── Dashboard.js
            └── Converter.js
