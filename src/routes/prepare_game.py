from fastapi import APIRouter, Request, status
from pydantic import Field, BaseModel
import logging
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter()


class Game:
    name: str = 'I am game'


class GameConfig(BaseModel):
    difficult: int = Field(..., gt=1, lt=4, description='Difficult of the game 1 to 4 there 1 is very easy and 4 is very hard')
    player_count: int = Field(..., gt=1, lt=6, description='Count playeer for new game')


class GameDescription(BaseModel):
    name: str
    owner: str
    difficult: int
    players: List[str]
    created: str = 'Now'


@router.get(
    '/create_new_game',
    description='Create instance of the Game',
    response_model=GameDescription
)
async def create_new_game(
    request: Request,
    game_config: GameConfig
):
    current_player = request.state.player
    request.state.games.update({current_player: Game()})
    game_description = GameDescription(name=current_player,
                                       owner=current_player,
                                       difficult=game_config.difficult,
                                       playeers=[current_player],
                                       )
    return game_description, status.HTTP_200_OK


@router.get(
    'join_game/{game_name}',
    description='Join to game',
    response_model=GameDescription
)
async def join_game(
    request: Request,
    name: str
):
    current_player = request.state.player
    game = request.state.games.get(name)
    game.playeers.append(current_player)
    game_description = GameDescription(name=game.name,
                                       owner=game.owner,
                                       difficult=game.difficult,
                                       players=game.players,
                                       )
    return game_description, status.HTTP_200_OK
