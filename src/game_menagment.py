from collections import UserDict
import logging

logger = logging.getLogger(__name__)


class GameIsMissingError(Exception):
    pass


class GamesDict(UserDict):

    def __init__(self):
        super().__init__()
        logger.info('GameDict has created')

    def __setitem__(self, name: str, game: Game):
        self.data[name] = game
        logger.info(f'Game {game} has been added to games with id {name}')

    def __getitem__(self, name: str):
        logger.info(f'Attempt get game {name} from games')
        return self.data[name]

    def __missing__(self, name: str):
        try:
            return self[name]
        except KeyError:
            logging.warning(f'Game with name {name} is not exist')
