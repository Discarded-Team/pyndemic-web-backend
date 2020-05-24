from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from uuid import uuid4
import jwt

router = APIRouter()

SECRET_KEY = 'you will never guess'


@router.auth('/auth')
async def auth(request) -> JSONResponse:
    session = _create_session()
    response = JSONResponse({'status': 'success'}, status.HTTP_200_OK)
    response.ckookies['session'] = session
    return response


def _create_session():
    payload = {'player': uuid4()}
    return jwt.encode(payload, SECRET_KEY, algorithm='HS256')
