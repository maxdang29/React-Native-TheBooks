import * as ActionTypes from './actions/actionTypes';

const init = {
  data: [],
  loading: false,
  error: [],
  upgradeMemberShip: [],
};

const membershipReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE:
      return {...state, loading: true};
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE_SUCCESS:
      return {...state, data: [...action.data], loading: false};
    case ActionTypes.GET_ALL_MEMBERSHIP_CODE_FAILED:
      return {...state, error: action.error, loading: false};
    case ActionTypes.UPGRADE_MEMBER_SHIP:
      return {...state, loading: true};
    case ActionTypes.UPGRADE_MEMBER_SHIP_SUCCESS:
      return {...state, upgradeMemberShip: action.data, loading: false};
    case ActionTypes.UPGRADE_MEMBER_SHIP_FAILED:
      return {...state, loading: false};

    default:
      return state;
  }
};

export default membershipReducer;
