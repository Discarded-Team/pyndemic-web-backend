from src.routes.another_actions import router as actions_router
from src.routes.moving import router as moving_router
from src.routes.prepare_game import router as prepare_game_router
from src.routes.auth import router as auth_router

__all__ = [
    actions_router, 
    moving_router,
    prepare_game_router,
    auth_router
]