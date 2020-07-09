
from fastapi import APIRouter, Query, Request
from fastapi.responses import JSONResponse, Response
from src.models import GameState, CityCard
from typing import List
import logging

logger = logging.getLogger(__name__)
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('Method %{msg} have recieved by %{player}'))
logger.addHandler(handler)


router = APIRouter()


@router.post(
    '/build',
    description='Discard a card of the city where you are now and place a building in this city',
    response_model=GameState
)
async def build(request: Request) -> Response:
    current_player = request.state.player
    logger.info('build', extra={'player': current_player})
    return JSONResponse({'method': 'build',
                         'player': current_player}, 200)


@router.post(
    '/treat',
    description='Discard a card of the city where you are now and remove one point of dosiase any colour',
    response_model=GameState
)
async def treat(
    request: Request,
    colour: str = Query(..., title='Colour disiase for trat')
):
    current_player = request.state.player
    logger.info('treat', extra={'player': current_player})
    return JSONResponse({'method': 'treat', 'player': current_player}, 200)


@router.post(
    '/cure',
    description='In a city with a medical station, discard 5 cards of the same color to cure the disease',
    response_model=GameState
)
async def cure(request: Request, discarded_cards: List[CityCard]):
    current_player = request.state.player
    logger.info('cure', extra={'player': current_player})
    return JSONResponse({'method': 'cure', 'player': current_player}, 200)


@router.post(
    '/share',
    response_model=GameState
)
async def share(
    request: Request,
    card: str = Query(..., title='Card for share'),
    player: str = Query(..., title='Player name for sharing')
):
    current_player = request.state.player
    logger.info('share', extra={'player': current_player})
    return JSONResponse({'method': 'share',
                         'player': current_player}, 200)


@router.post(
    '/pass',
    response_model=GameState,
)
async def pass_action(request: Request,):
    current_player = request.state.player
    logger.info('pass', extra={'player': current_player})
    return JSONResponse({'method': 'pass',
                         'player': current_player}, 200)


@router.get(
    '/api/v1',
)
async def send_cmd(request: Request,):
    logger.info('got request', request)
    return JSONResponse({"got request": "OK"}, 200)
