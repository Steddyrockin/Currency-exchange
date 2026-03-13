def run_backtest(data, strategy):

    balance = 10000

    for candle in data:

        signal = strategy(candle)

        if signal == "BUY":
            balance += 50

        elif signal == "SELL":
            balance -= 30

    return balance