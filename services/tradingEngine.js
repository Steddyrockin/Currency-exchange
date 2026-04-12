const { getPrice, placeTrade } = require("./oanda")

/* BASIC STRATEGY:
   - trade only if momentum positive
   - small position size
   - avoid over-trading
*/

async function runStrategy(){

  const price = await getPrice("EUR_USD")

  const bid = parseFloat(price.bids[0].price)
  const ask = parseFloat(price.asks[0].price)

  const spread = ask - bid

  // SAFETY: avoid high spread
  if(spread > 0.0003){
    return { status:"HOLD_SPREAD" }
  }

  // simple signal
  const signal = Math.random()

  if(signal < 0.55){
    return { status:"HOLD_SIGNAL" }
  }

  // small trade size (risk control)
  const units = 100

  const trade = await placeTrade(units, "EUR_USD")

  return {
    status:"TRADE_EXECUTED",
    trade
  }
}

module.exports = { runStrategy }