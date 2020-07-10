import uuid

from fastapi import Request
from fastapi.responses import Response
from starlette.middleware.base import BaseHTTPMiddleware


class SessionMiddleware(BaseHTTPMiddleware):

    async def dispatch(self, request: Request, call_next) -> Response:

        session = request.cookies.get('session', None)

        # TODO change request.state.player to change request.state.session
        request.state.player = session
        response = await call_next(request)

        if not session:
            response.set_cookie(key='session', value=str(uuid.uuid4()))

        return response
