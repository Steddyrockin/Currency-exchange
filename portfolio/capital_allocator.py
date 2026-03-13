def allocate_capital(signals, capital):

    active = [s for s in signals if signals[s] != "HOLD"]

    if len(active) == 0:
        return {}

    allocation = capital / len(active)

    positions = {}

    for pair in active:
        positions[pair] = allocation

    return positions