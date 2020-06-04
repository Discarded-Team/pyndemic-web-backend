from src.game_managment import GamesDict
from src.routes import (
    moving_router,
    actions_router,
    auth_router,
    prepare_game_router
)
from src.middleware import sessionMiddleware
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import logging
from fastapi.staticfiles import StaticFiles

logger = logging.getLogger(__name__)

app = FastAPI(title='Pyndemic board game', debug=True)
app.mount("/static", StaticFiles(directory="frontend"), name="static")


@app.on_event("startup")
async def start_server():
    app.state.games = GamesDict()
    logger.info('Server have started')


@app.on_event("shutdown")
async def shutdown_server():
    logger.info('Server have shutdown')


app.mount("/static", StaticFiles(directory="src/static"), name="static")

app.add_middleware(sessionMiddleware)
app.include_router(moving_router, prefix='/moving', tags=['moving'])
app.include_router(actions_router, prefix='/actions', tags=['actions'])
app.include_router(auth_router, tags=['auth'])
app.include_router(prepare_game_router, tags=['prepare_game'])
