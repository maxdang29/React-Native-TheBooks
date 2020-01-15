import * as types from './action/typesAction';

const init = {
  comment: [],
  commentLoading: false,
  error: [],
};

const commentReducers = (state = init, action) => {
  switch (action.type) {
    // case types.ADD_COMMENT:
    //   return {...state, comment: action.data, commentLoading: true};
    case types.ADD_COMMENT_SUCCESS:
      return {...state, comment: [...action.data]};
    // case types.ADD_COMMENT_FAILED:
    //   return {...state, error: action.error, commentLoading: false};
    case types.GET_REVIEW_BOOK_SUCCESS:
      return {...state, comment: action.data};
    case types.DELETE_REVIEW_BOOK_SUCCESS:
      return {...state, comment: action.data};

    case types.UPDATE_REVIEW_BOOK:
      return {...state, commentLoading: true};
    case types.UPDATE_REVIEW_BOOK_SUCCESS:
      return {...state, comment: [...action.data], commentLoading: false};
    default:
      return {...state};
  }
};

export default commentReducers;
