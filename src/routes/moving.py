from fastapi import APIRouter, Path, Request, status
from fastapi.responses import JSONResponse
from src.models import GameState
import logging

logger = logging.getLogger(__name__)

router = APIRouter()


@router.post(
    '/{move_action}/{city_name}',
    description='Move to a city',
    response_model=GameState
)
async def move_action(
    request: Request,
    move_action: str = Path(..., title='Moving action'),
    city_name: str = Path(..., title='Target city'),
):
    current_player = request.state.player
    logger.info(f'Move to {city_name} with {move_action} action by {current_player}')
    return JSONResponse({'method': 'move',
                         'player': current_player,
                         'type': move_action}, status.HTTP_200_OK)
