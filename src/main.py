from src.game_managment import GamesDict
from src.middleware import SessionMiddleware
from src.routes import (
    moving_router,
    actions_router,
    prepare_game_router
)

from fastapi import FastAPI
import logging
from fastapi.staticfiles import StaticFiles

logger = logging.getLogger(__name__)

app = FastAPI(title='Pyndemic board game', debug=True)
app.mount("/static", StaticFiles(directory="frontend"), name="static")
app.mount("/static2", StaticFiles(directory="frontend2"), name="static")


@app.on_event("startup")
async def start_server():
    app.state.games = GamesDict()
    logger.info('Server have started')


@app.on_event("shutdown")
async def shutdown_server():
    logger.info('Server have shutdown')

app.add_middleware(SessionMiddleware)
app.include_router(moving_router, prefix='/moving', tags=['moving'])
app.include_router(actions_router, prefix='/actions', tags=['actions'])
app.include_router(prepare_game_router, tags=['prepare_game'])
