def aggregate_signal(lstm_signal, transformer_signal, volatility):

    score = 0

    if lstm_signal == "BUY":
        score += 1

    if transformer_signal == "BUY":
        score += 1

    if volatility == "HIGH":
        score += 1

    if score >= 2:
        return "BUY"

    elif score <= -2:
        return "SELL"

    return "HOLD"