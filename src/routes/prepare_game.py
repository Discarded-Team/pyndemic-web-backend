from fastapi import APIRouter, Request, status, BackgroundTasks
from src.game_managment import GameSession
from pydantic import Field, BaseModel
from pyndemic.game import Game
from pyndemic.character import Character
from datetime import datetime
import json
import logging
from typing import Dict, Any

from pprint import pprint

logger = logging.getLogger(__name__)


router = APIRouter()


class GameConfig(BaseModel):
    owner_name: str
    difficult: int = Field(..., ge=1, le=4,
                           description='Difficult of the game 1 to 4 there 1 is very easy and 4 is very hard')
    player_count: int = Field(..., ge=1, le=6,
                              description='Count playeer for new game')


class GameDescription(BaseModel):
    name: str
    owner: str
    difficult: int
    players: Dict[str, str]
    player_count: str
    created: str


@router.post(
    '/create_new_game',
    description='Create instance of the Game',
    response_model=GameDescription
)
async def create_new_game(
    request: Request,
    game_config: GameConfig,
    background_tasks: BackgroundTasks,
):
    game = Game()
    current_player = request.state.player
    background_tasks.add_task(setup_game, game)
    gameSession = GameSession(owner_name=game_config.owner_name,
                              owner_user_id=current_player,
                              difficult=game_config.difficult,
                              player_count=game_config.player_count,
                              created=datetime.utcnow().isoformat(),
                              game=game)

    request.app.state.games.update({current_player: gameSession})

    response = {'name': current_player,
                'owner': current_player,
                'difficult': gameSession.difficult,
                'players': gameSession.players,
                'player_count': f'1 of {gameSession.player_count}',
                'created': gameSession.created}

    return response


def setup_game(game: Game) -> None:
    game.setup_game()
    logger.info('Game have setuped')


@router.get(
    '/join_game/{game_name}/{character_name}',
    description='Join to game',
    response_model=GameDescription
)
async def join_game(
    request: Request,
    game_name: str,
    character_name: str
):
    current_player = request.state.player
    gameSessions = request.app.state.games
    gameSession = find_game(current_player, gameSessions)
    gameSession.add_player(character_name, current_player)

    response = {'name': gameSession.name,
                'owner': gameSession.owner_user_id,
                'difficult': gameSession.difficult,
                'players': gameSession.players,
                'player_count': f'{len(gameSession.players.items())} of {gameSession.player_count}',
                'created': gameSession.created
    }
    return response


def find_game(current_player, games):
    for gameSession in games.values():
        if current_player in gameSession.players.keys():
            return gameSession
