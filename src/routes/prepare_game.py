import logging

from fastapi import APIRouter, Request
from fastapi.responses import JSONResponse
from pyndemic.controller import GameController
from pydantic import BaseModel

from src.game_managment import find_game, GameIsMissingError

logger = logging.getLogger(__name__)


router = APIRouter()


class GameOptions(BaseModel):
    # It's temporary arguments, while we don't know which use
    difficult: int = None
    player_count: int = None


class JoinGameOptions(BaseModel):
    game_id: str


@router.post(
    '/create_new_game',
    description='Create instance of the Game'
)
async def create_new_game(request: Request, game_options: GameOptions):

    # TODO bind request.state.session with controller or keep game_id in session

    controller = GameController()
    game_id = controller._ctx
    request.app.state.games.update({game_id: controller})
    response = {'status': 'success',
                'game_id': game_id}

    return response


@router.post(
    '/join_game',
    description='Join to game'
)
async def join_game(
    request: Request,
    join_game_options: JoinGameOptions
):
    game_id = JoinGameOptions.game_id
    try:
        controller = find_game(request, game_id)
        response = {'status': 'success',
                    'game_id': controller.game_id}
    except GameIsMissingError:
        response = {'status': 'failure',
                    'description': 'game is missing'}
    return response


@router.get(
    '/game_state/{game_name}',
    description='Current game state'
)
async def state_game(
    request: Request,
    game_name: str,
) -> JSONResponse:
    gameSession = request.app.state.games.get(game_name)
    gameSession.add_player('Bob', 'dsdssdsdsd')
    gameSession.start_game()
    return JSONResponse(gameSession.game_to_dict())
