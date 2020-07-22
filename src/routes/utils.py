

def error_response(err_msg: str = ''):
    if not err_msg:
        err_msg = "Unexpected error occurred for some reasons."

    response = {
            'status': 'error',
            'err_msg': err_msg,
        }
    return response
