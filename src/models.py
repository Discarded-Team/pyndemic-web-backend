from pydantic import BaseModel


class GameState(BaseModel):
    move_action: str
    city_name: str


class CityCard(BaseModel):
    card_name: str


class Player(BaseModel):
    name: str
