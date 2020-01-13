import * as LoginTypes from './actionTypes';

export const login = data => ({
  type: LoginTypes.LOGIN,
  payload: data,
});
export const loginSuccess = (response, token) => ({
  type: LoginTypes.LOGIN_SUCCESS,
  payload: response,
  token: token,
});
export const loginFail = error => ({
  type: LoginTypes.LOGIN_FAIL,
  payload: error,
});
