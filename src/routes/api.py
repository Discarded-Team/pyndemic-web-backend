import logging

from fastapi import APIRouter, Request, status
from fastapi.responses import JSONResponse, Response

from .utils import error_response


router = APIRouter()


@router.post('/api',
             description='Send a gameplay command to the game controller')
async def api_call(request: Request) -> Response:
    game_request = request.json()
    session = request.state.player
    # TODO: right method for getting "game_id" from session
    game_id = session.get('game_id')

    if not game_id:
        logging.error(
            f'Accepted request with no game ID provided: {game_request}.')
        response = error_response('No game ID provided with request.')
        return JSONResponse(response, status.HTTP_403_FORBIDDEN)

    controller = request.app.state.games.get(game_id)
    if not controller:
        logging.error(
            f'Accepted request with unregistered game ID: {game_request}.')
        response = error_response('No game found by requested ID.')
        return JSONResponse(response, status.HTTP_404_NOT_FOUND)

    logging.info(
        f'Accepted request for game {game_id}: {game_request}.')
    game_response = controller.send(game_request)
    response_type = game_response['type']
    logging.info(
        f'Returning "{response_type}" response from game {game_id}.')

    return JSONResponse(game_response, status.HTTP_200_OK)
