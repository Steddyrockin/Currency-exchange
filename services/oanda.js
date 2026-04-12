const axios = require("axios")

const BASE = process.env.OANDA_URL

const api = axios.create({
  baseURL: BASE,
  headers: {
    Authorization: `Bearer ${process.env.OANDA_API_KEY}`,
    "Content-Type": "application/json"
  }
})

/* GET PRICE */
async function getPrice(instrument="EUR_USD"){
  const res = await api.get(`/v3/accounts/${process.env.OANDA_ACCOUNT_ID}/pricing`,{
    params:{ instruments: instrument }
  })

  return res.data.prices[0]
}

/* PLACE TRADE */
async function placeTrade(units=100, instrument="EUR_USD"){

  const order = {
    order:{
      units: units.toString(),
      instrument,
      timeInForce:"FOK",
      type:"MARKET",
      positionFill:"DEFAULT"
    }
  }

  const res = await api.post(
    `/v3/accounts/${process.env.OANDA_ACCOUNT_ID}/orders`,
    order
  )

  return res.data
}

module.exports = { getPrice, placeTrade }