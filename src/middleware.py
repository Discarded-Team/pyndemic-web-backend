from fastapi import Request
from uuid import uuid4
import jwt


SECRET_KEY = 'you will never guess'


async def add_session(request: Request, call_next):
    session = request.cookies.get('session', None)
    if not session:
        session = jwt.encode({'user': uuid4()}, SECRET_KEY, algorithm='HS256')
        response.cookies['session'] = session
    else:
        pass
    # TODO
    response = await call_next(request)
    return response
