const pairs = [
"EURUSD",
"USDJPY",
"GBPUSD",
"AUDUSD",
"USDCAD",
"USDCHF",
"NZDUSD"
]

function findBestPair(data){

    let best = null
    let bestProfit = 0

    pairs.forEach(pair => {

        const profit = data[pair].predicted - data[pair].current

        if(profit > bestProfit){
            bestProfit = profit
            best = pair
        }

    })

    return best
}

module.exports = findBestPair