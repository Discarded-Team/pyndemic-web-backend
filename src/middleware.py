from fastapi import Request, status
from fastapi.responses import Response, JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
import jwt


SECRET_KEY = 'you should never guess'


class sessionMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)

    async def dispatch(self, request: Request, call_next) -> Response:

        session = request.cookies.get('session', None)

        if is_auth_endpoint(request):
            if session:
                return JSONResponse({'status': 'authorized'}, status.HTTP_202_ACCEPTED)
            else:
                return await call_next(request)

        if not session:
            response = JSONResponse({'error': 'Unauthorized'}, status_code=status.HTTP_401_UNAUTHORIZED)
            response.headers['WWW-Authentication'] = 'URI /auth'
            return response
        else:
            request.state.player = _get_player_uuid(session)
            response = await call_next(request)

        return response


def _get_player_uuid(jwt_token, claim: str = 'player'):
    try:
        decoded_token = _decode_jwt_token(jwt_token)
        return decoded_token['player']
    except jwt.exceptions.MissingRequiredClaimError as exc:
        raise exc


def _decode_jwt_token(jwt_token):
    try:
        return jwt.decode(jwt_token, SECRET_KEY, algorithms='HS256')
    except jwt.exceptions.InvalidSignatureError as exc:
        raise exc



def is_auth_endpoint(request: Request):
    return str(request.url).endswith('/auth')
