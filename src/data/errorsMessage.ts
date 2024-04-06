export const BAD_PARAMETER =
  "An invalid parameter was passed. this includes even high level paramters like key or site";
export const ACCESS_TOKEN_REQUIRED =
  "A method that requiires an access token (obtained via authentication) was calle without one.";
export const INVALID_ACCESS_TOKEN =
  "An invalid access token was passed to a method.";
export const ACCESS_DENIED =
  "A method which requires certain permissions was called with an access token that lacks those permissions";
export const NO_METHOD =
  "An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.";
export const KEY_REQUIRED =
  "A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.";
export const ACCESS_TOKEN_COMPROMISED =
  "An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.";
export const WRITE_FAILED =
  "A write operation was rejected, see the returned error_message for more details";
export const DUPLICATE_REQUEST =
  "A request identified by a request_id has already been run";
export const INTERNAL_ERROR =
  "An unexpected error occurred in the API and has been logged";
export const THROTTLE_VIOLATION =
  "An application has violated part of the rate limiting contract, so the request was terminated.";
export const TEMPORAILY_UNAVALIBLE =
  "Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.";
