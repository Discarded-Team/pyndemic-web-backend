from fastapi import FastAPI
from src.routes import moving_router, actions_router
from src.middleware import sessionMiddleware
import logging

logger = logging.getLogger(__name__)


app = FastAPI(
    title='Pyndemic board game',
    debug=True,
    )

app.add_middleware(sessionMiddleware)

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
