from src.game_menagment import GamesDict
from src.routes import moving_router, actions_router
from src.middleware import sessionMiddleware

from fastapi import FastAPI

import logging

logger = logging.getLogger(__name__)

app = FastAPI(title='Pyndemic board game', debug=True)


@app.on_event("startup")
async def start_server():
    app.state.games = GamesDict()
    logger.info('Server have started')


@app.on_event("shutdown")
async def shutdown_server():
    logger.info('Server have shutdown')

app.add_middleware(sessionMiddleware)

app.include_router(moving_router, prefix='/moving', tags=['moving'])
app.include_router(actions_router, prefix='/actions', tags=['actions'])
