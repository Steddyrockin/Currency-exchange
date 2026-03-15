const scan = require("../ai/marketScanner")
const signal = require("../ai/signalEngine")

async function run(){

const rates = await scan()

const current = rates.EUR

const predicted = current + Math.random()*0.002

const action = signal(current,predicted)

if(action==="BUY"){

console.log("Buying EURUSD")

}else{

console.log("Holding")

}

}

module.exports={run}