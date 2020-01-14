import * as LoginType from './actionTypes';

const init = {
  data: [],
  error: null,
  token: null,
  loginLoading: false,
  changeBottomTab: false,
};
const loginReducer = (state = init, action) => {
  switch (action.type) {
    case LoginType.LOGIN:
      return {...state, loginLoading: true};
    case LoginType.LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        token: action.token,
        loginLoading: false,
        changeBottomTab: true,
      };
    case LoginType.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loginLoading: false,
        changeBottomTab: false,
      };
    case LoginType.LOGOUT:
      return {
        ...state,
        token: null,
        loginLoading: false,
        changeBottomTab: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
