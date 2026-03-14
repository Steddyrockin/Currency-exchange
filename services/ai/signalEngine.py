MAX_LOSS = 0.01


def price_change(current_price, predicted_price):
    return predicted_price - current_price


def calculate_profit(current_price, predicted_price):

    change = price_change(current_price, predicted_price)

    # enforce maximum loss limit
    if change < -MAX_LOSS:
        return -MAX_LOSS

    # no cap on profit
    return change


def generate_signal(current_price, predicted_price):

    change = price_change(current_price, predicted_price)

    if change > 0:
        return "BUY"

    if change < 0:
        return "SELL"

    return "HOLD"


def maximize_profit(currency_predictions):

    """
    currency_predictions example:

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

        profit = calculate_profit(current_price, predicted_price)

        # ignore trades exceeding max loss
        if profit < -MAX_LOSS:
            continue

        # choose the highest profit opportunity
        if profit > best_profit:
            best_profit = profit
            best_pair = pair
            best_signal = generate_signal(current_price, predicted_price)

    # hold if no profitable trade exists
    if best_pair is None or best_profit <= 0:

        return {
            "pair": None,
            "signal": "HOLD",
            "expected_profit": 0,
            "max_loss": MAX_LOSS
        }

    return {
        "pair": best_pair,
        "signal": best_signal,
        "expected_profit": best_profit,
        "max_loss": MAX_LOSS
    }