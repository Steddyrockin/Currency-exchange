README.md
requirements.txt
config.yaml

data/
    download_data.py
    market_stream.py
    data_loader.py

features/
    indicators.py
    volatility_features.py
    feature_pipeline.py

models/
    lstm/
        lstm_model.py
        train_lstm.py
        predict_lstm.py

    transformer/
        transformer_model.py
        train_transformer.py
        predict_transformer.py

    volatility/
        volatility_model.py
        train_volatility.py

signals/
    signal_aggregator.py
    signal_rules.py

risk/
    risk_manager.py
    position_sizing.py
    drawdown_control.py

execution/
    trade_executor.py
    broker_api.py
    order_manager.py

reinforcement_learning/
    environment.py
    rl_agent.py
    train_agent.py

portfolio/
    portfolio_manager.py
    capital_allocator.py
    correlation_engine.py

backtesting/
    backtest_engine.py
    strategy_tester.py
    performance_metrics.py

monitoring/
    trade_logger.py
    performance_tracker.py
    alerts.py

utils/
    config_loader.py
    logger.py
    time_utils.py

notebooks/
    research.ipynb
    model_experiments.ipynb

tests/
    test_models.py
    test_signals.py