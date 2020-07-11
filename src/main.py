import logging

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from src.game_managment import GamesDict
from src.middleware import SessionMiddleware
from src.routes import (
    api_router,
    prepare_game_router,
)

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
app.include_router(api_router, prefix='/api', tags=['api'])
app.include_router(prepare_game_router, tags=['prepare_game'])
