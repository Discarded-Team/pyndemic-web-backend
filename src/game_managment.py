from fastapi import Request
from pyndemic.controller import GameController


class GameIsMissingError(Exception):
    pass


def find_game(request: Request, game_id: str) -> GameController:
    controller = request.state.games.get(game_id)
    if not controller:
        raise GameIsMissingError(f'Game with {game_id} not found')
    return controller
