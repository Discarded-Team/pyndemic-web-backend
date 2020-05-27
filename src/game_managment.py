from pyndemic.game import Game
from pyndemic.character import Character
from collections import UserDict
import logging

logger = logging.getLogger(__name__)


class GameIsMissingError(Exception):
    pass


class GamesDict(UserDict):

    def __init__(self):
        super().__init__()
        logger.info('GameDict has created')

    def __setitem__(self, name: str, gameSession: 'GameSession'):
        self.data[name] = gameSession
        logger.info(f'Game {gameSession.name} has been added to games with id {name}')

    def __getitem__(self, name: str):
        logger.info(f'Attempt get game {name} from games')
        return self.data[name]

    def __missing__(self, name: str):
        try:
            return self[name]
        except KeyError:
            logging.warning(f'Game with name {name} is not exist')


class GameSession:
    def __init__(self,
                 owner_name: str,
                 owner_user_id: str,
                 difficult: int,
                 player_count: int,
                 created: str,
                 game: Game):
        self.game = game
        self.created = created
        self.difficult = difficult
        self.player_count = player_count
        self.name = owner_user_id
        self.owner_user_id = owner_user_id
        self.players = {}
        self.add_player(owner_name, owner_user_id)

    def add_player(self, name, current_user):
        self.game.add_character(Character(name))
        self.players.update({current_user: name})
        logger.info(f'Playeer {current_user} with name {name} join to game with name {self.owner_user_id}')
