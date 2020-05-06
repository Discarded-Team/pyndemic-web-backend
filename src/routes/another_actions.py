from fastapi import APIRouter, Query
from src.models import GameState, CityCard
from typing import List

router = APIRouter()


@router.post(
    '/build',
    description='Discard a card of the city where you are now and place a building in this city',
    response_model=GameState
)
async def build():
    return {'action': 'build', 'city': 'this_city'}


@router.post(
    '/treat',
    description='Discard a card of the city where you are now and remove one point of dosiase any colour',
    response_model=GameState
)
async def treat(colour: str = Query(..., title='Colour disiase for trat')):
    return {'action': 'treat', 'city': 'this_city'}


@router.post(
    '/cure',
    description='In a city with a medical station, discard 5 cards of the same color to cure the disease',
    response_model=GameState
)
async def cure(discarded_cards: List[CityCard]):
    return {'action': 'treat', 'city': 'this_city'}


@router.post(
    '/share',
    response_model=GameState
)
async def share(
    card: str = Query(..., title='Card for share'),
    player: str = Query(..., title='Player name for sharing')
):
    return {'action': 'pass', 'city': 'this_city'}


@router.post(
    '/pass',
    response_model=GameState,
)
async def pass_action():
    return {'action': 'pass', 'city': 'this_city'}
