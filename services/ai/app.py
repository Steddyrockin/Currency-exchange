# ai-engine/app.py

from fastapi import FastAPI
from models.lstm import predict_price

app = FastAPI()

@app.post("/predict")
def predict(data: dict):

    current = data["current_price"]

    predicted = predict_price(data)

    return {
        "current": current,
        "predicted": predicted
    }