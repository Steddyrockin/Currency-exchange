from data.download_data import get_forex_data
from features.feature_pipeline import build_features
from models.lstm.predict_lstm import predict_price
from signals.signal_aggregator import aggregate_signal
from execution.trade_executor import execute_trade

df = get_forex_data("EURUSD=X")

features = build_features(df)

prediction = predict_price(features)

signal = aggregate_signal(prediction)

execute_trade(signal)