from fastapi import Request


def get_current_player(request: Request):
    try:
        current_player = request.state.player
        return current_player
    except LookupError as exc:
        raise exc
