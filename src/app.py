from fastapi import FastAPI
from src.routes.moving import router as moving_router


app = FastAPI(
    debug=True,
    title='Pyndemic board game',
    )


app.include_router(
    moving_router,
    prefix='/moving',
    tags=['moving'],
)
