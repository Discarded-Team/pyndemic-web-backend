from pydantic import BaseModel


class GameState(BaseModel):
    move_action: str
    city_name: str
