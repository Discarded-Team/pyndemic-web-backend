from fastapi import APIRouter

router = APIRouter()
router.options(
    path='/moving',
    tags=['moving'],
    summary='Actions for mooving on thee map',
    response_description='State of game after this action'
)

@router.get(
    '/move/{city_name}',
    description='Move to a nearby city',
)
async def move(city_name: str):
    return {'status': f'Move to {city_name}'}


@router.get(
    '/fly/{city_name}',
    description='Move to any city if you have card this city',
)
async def fly():
    pass


@router.get(
    '/charter/{city_name}',
    description='Move to any city if you have card of the city where you are',
)
async def charter():
    pass


@router.get(
    '/shuttle/{city_name}',
    description='Move from city with medical station to the city with medical station',
)
async def shuttle():
    pass
