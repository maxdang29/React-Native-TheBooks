import * as registerType from './actionTypes';

const init = {
  data: {},
  error: null,
  registerLoading: false,
};
const registerReducer = (state = init, action) => {
  switch (action.type) {
    case registerType.REGISTER:
      return {...state, registerLoading: true};
    case registerType.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        registerLoading: false,
      };
    case registerType.REGISTER_FAIL:
      return {...state, error: action.payload, registerLoading: false};
    default:
      return state;
  }
};

export default registerReducer;
