import unittest
import requests
import datetime


class TestGameApi(unittest.TestCase):
    def test_create_game(self):
        # game_params = dict(
        #     name='test',
        #     owner='Bob',
        #     difficult=2,
        #     players=dict(Alice='Doctor',
        #                  Bob='Scientist',
        #                  Malory='Researcher',
        #                  Chuk='Caranteener'),
        #     player_count=str(4),
        #     created=str(datetime.datetime.now())
        # )
        # game_params = {
        #     "name": "string",
        #     "owner": "string",
        #     "difficult": 2,
        #     "players": {
        #         "additionalProp1": "string",
        #         "additionalProp2": "string",
        #         "additionalProp3": "string"
        #     },
        #     "player_count": 4,
        #     "created": "string"
        # }
        # game_params = {
        #     "owner_name": "string",
        #     "difficult": 2,
        #     "player_count": 2,
        # }

        game_params = {
              "owner_name": "string",
              "difficult": 0,
              "player_count": 0
        }
        # params = '&'.join([f'"{k}"="{v}"' for k, v in game_params.items()])
        # print(params)
        # res = requests.get(f'http://127.0.0.1:8000/create_new_game?{params}', data=game_params)
        res = requests.get('http://127.0.0.1:8000/create_new_game', data=game_params)
        print(res.text)
