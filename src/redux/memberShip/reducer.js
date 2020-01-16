import * as ActionTypes from './actions/actionTypes';

const init = {
  data: [],
  loadingCart: false,
  error: [],
};

const membershipReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE:
      return {...state, loadingCart: true};
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE_SUCCESS:
      return {...state, data: [...action.data], loadingCart: true};
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE_FAILED:
      return {...state, error: action.error, loadingCart: true};
    default:
      return state;
  }
};

export default membershipReducer;
