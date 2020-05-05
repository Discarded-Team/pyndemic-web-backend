from fastapi import FastAPI
from src.routes import routes


app = FastAPI(debug=True)
app.include_router(routes)
