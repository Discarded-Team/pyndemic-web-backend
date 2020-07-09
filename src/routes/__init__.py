from .api import router as api_router
from .prepare_game import router as prepare_game_router
from .auth import router as auth_router

__all__ = [
    api_router,
    prepare_game_router,
    auth_router,
]
