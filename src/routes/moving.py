from fastapi import APIRouter, Path
from src.models import GameState

router = APIRouter()


@router.post(
    '/{move_action}/{city_name}',
    description='Move to a city',
    response_model=GameState
)
async def move_action(
    move_action: str = Path(..., title='Moving action'),
    city_name: str = Path(..., title='Target city'),
):
    return {'action': move_action, 'city': city_name}
