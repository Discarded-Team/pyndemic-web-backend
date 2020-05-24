from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from uuid import uuid4
import jwt

router = APIRouter()

SECRET_KEY = 'you will never guess'


@router.get('/auth')
async def auth() -> JSONResponse:
    session = _create_session()
    response = JSONResponse({'status': 'success'}, status.HTTP_200_OK)
    response.set_cookie(key='session', value=session,)
    return response


def _create_session():
    payload = {'player': str(uuid4())}
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256').decode('utf-8')
