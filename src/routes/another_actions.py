from fastapi import APIRouter, Path
from src.models import GameState

router = APIRouter()


@router.post(
    '/build'
    description='Сбрость карту города в котором сейчас находитесь и поместите фишку постройки в этот город',
)
async def build():
    return {'action': 'build', 'city': 'this_city'}


@router.post(
    '/treat/{colour}',
)
async def treat(colour: str):
    return {'action': 'treat', 'city': 'this_city'}


@router.post(
    '/cure',
)
async def cure():
    return {'action': 'treat', 'city': 'this_city'}


@router.post(
    '/share'
)
async def share(
    
):

@router.post(
    '/pass'
)
async def pass_action(
    
):