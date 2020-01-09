import * as RegisterType from './actionTypes';

export const register = data => ({
  type: RegisterType.REGISTER,
  payload: data,
});
export const registerSuccess = response => ({
  type: RegisterType.REGISTER_SUCCESS,
  payload: response,
});
export const registerFail = error => ({
  type: RegisterType.REGISTER_FAIL,
  payload: error,
});
