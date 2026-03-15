def generate_signal(current_price, predicted_price):

    threshold = 0.01

    if predicted_price > current_price + threshold:
        return "BUY"

    if predicted_price < current_price - threshold:
        return "SELL"

    return "HOLD"