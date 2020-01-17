import * as types from './action/actionTypes';

const init = {
  notice: [],
  noticeLoading: false,
  error: [],
};

const noticeReducer = (state = init, action) => {
  switch (action.type) {
    case types.GET_LIST_USER_NOTIFICATIONS:
      return {...state, noticeLoading: true};
    case types.GET_LIST_USER_NOTIFICATIONS_FAILED:
      return {...state, error: action.data, noticeLoading: false};
    case types.GET_LIST_USER_NOTIFICATIONS_SUCCESS:
      return {...state, notice: [...action.data], noticeLoading: false};
    case types.MARK_AS_SEEN_NOTIFICATIONS:
      return {...state, noticeLoading: true};
    case types.MARK_AS_SEEN_NOTIFICATIONS_FAILED:
      return {...state, error: action.data, noticeLoading: false};
    case types.MARK_AS_SEEN_NOTIFICATIONS_SUCCESS:
      return {...state, notice: [...action.data], noticeLoading: false};
    default:
      return {...state};
  }
};

export default noticeReducer;
