from fastapi import FastAPI
from src.routes import moving_router, actions_router


app = FastAPI(
    title='Pyndemic board game',
    debug=True,
    )


app.include_router(
    moving_router,
    prefix='/moving',
    tags=['moving'],
)

app.include_router(
    actions_router,
    prefix='/actions',
    tags=['actions'],
)