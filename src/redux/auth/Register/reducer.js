import * as registerType from './actionTypes';

const init = {
  data: {},
  error: null,
  token: null,
  registerLoading: false,
  gotoUserProfile: false,
};
const registerReducer = (state = init, action) => {
  switch (action.type) {
    case registerType.REGISTER:
      return {...state, registerLoading: true, gotoUserProfile: false};
    case registerType.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        registerLoading: false,
        token: action.token,
        gotoUserProfile: true,
      };
    case registerType.REGISTER_FAIL:
      return {
        ...state,
        error: action.payload,
        registerLoading: false,
        gotoUserProfile: false,
      };
    default:
      return state;
  }
};

export default registerReducer;
