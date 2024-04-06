import {
  ACCESS_DENIED,
  ACCESS_TOKEN_COMPROMISED,
  ACCESS_TOKEN_REQUIRED,
  BAD_PARAMETER,
  DUPLICATE_REQUEST,
  INTERNAL_ERROR,
  INVALID_ACCESS_TOKEN,
  KEY_REQUIRED,
  NO_METHOD,
  TEMPORAILY_UNAVALIBLE,
  THROTTLE_VIOLATION,
  WRITE_FAILED,
} from "../data/errorsMessage";

export interface ErrorObject {
  status: number;
  message: string;
}

export interface ErrorsMap {
  [key: number]: ErrorObject;
}
export const useErrors = () => {
  const errorObject: ErrorsMap = {
    400: { status: 400, message: BAD_PARAMETER },
    401: { status: 401, message: ACCESS_TOKEN_REQUIRED },
    402: { status: 402, message: INVALID_ACCESS_TOKEN },
    403: { status: 403, message: ACCESS_DENIED },
    404: { status: 404, message: NO_METHOD },
    405: { status: 405, message: KEY_REQUIRED },
    406: { status: 406, message: ACCESS_TOKEN_COMPROMISED },
    407: { status: 407, message: WRITE_FAILED },
    409: { status: 409, message: DUPLICATE_REQUEST },
    500: { status: 500, message: INTERNAL_ERROR },
    502: { status: 502, message: THROTTLE_VIOLATION },
    503: { status: 503, message: TEMPORAILY_UNAVALIBLE },
  };

  return {
    errorObject,
  };
};
