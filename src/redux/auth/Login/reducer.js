import * as LoginType from './actionTypes';

const init = {
  data: [],
  error: null,
  token: null,
  loginLoading: false,
};
const loginReducer = (state = init, action) => {
  console.log('action login', action.token);
  switch (action.type) {
    case LoginType.LOGIN:
      return {...state, loginLoading: true};
    case LoginType.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        token: action.token,
        loginLoading: false,
      };
    case LoginType.LOGIN_FAIL:
      return {...state, error: action.error, loginLoading: false};
    case LoginType.LOGOUT:
      return {...state, token: null, loginLoading: false};
    default:
      return state;
  }
};

export default loginReducer;
