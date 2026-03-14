def expected_profit(current_price, predicted_price, threshold=0.01):
    
    change = predicted_price - current_price
    
    if abs(change) < threshold:
        return 0
        
    return change


def generate_signal(current_price, predicted_price, threshold=0.01):

    change = predicted_price - current_price

    if change > threshold:
        return "BUY"

    if change < -threshold:
        return "SELL"

    return "HOLD"


def maximize_profit(currency_predictions, threshold=0.01):

    """
    currency_predictions format:
    
    {
        "EURUSD": (current_price, predicted_price),
        "GBPUSD": (current_price, predicted_price),
        "USDJPY": (current_price, predicted_price)
    }
    """

    best_pair = None
    best_profit = 0
    best_signal = "HOLD"

    for pair, prices in currency_predictions.items():

        current_price, predicted_price = prices

        profit = expected_profit(current_price, predicted_price, threshold)

        if profit > best_profit:
            best_profit = profit
            best_pair = pair
            best_signal = generate_signal(current_price, predicted_price, threshold)

    if best_profit <= 0:
        return {
            "pair": None,
            "signal": "HOLD",
            "expected_profit": 0
        }

    return {
        "pair": best_pair,
        "signal": best_signal,
        "expected_profit": best_profit
    }