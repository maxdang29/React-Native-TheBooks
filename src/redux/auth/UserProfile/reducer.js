import * as updateUserProfileTypes from './actionTypes';

const init = {
  data: {},
  error: null,
  updateLoading: false,
};
const updateUserProfileReducer = (state = init, action) => {
  switch (action.type) {
    case updateUserProfileTypes.UPDATE_USER_PROFILE:
      return {...state, updateLoading: true};
    case updateUserProfileTypes.UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        updateLoading: false,
      };
    case updateUserProfileTypes.UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
        updateLoading: false,
      };
    default:
      return state;
  }
};

export default updateUserProfileReducer;
