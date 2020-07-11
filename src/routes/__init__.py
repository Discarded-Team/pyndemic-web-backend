from .api import router as api_router
from .prepare_game import router as prepare_game_router

__all__ = [
    api_router,
    prepare_game_router,
]
