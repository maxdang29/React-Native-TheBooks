import * as types from './action/typesAction';

const init = {
  comment: [],
  commentLoading: false,
};

const commentReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_COMMENT_SUCCESS:
      return {...state, comment: action.data, commentLoading: false};
    case types.ADD_COMMENT:
      return {...state, comment: action.data, commentLoading: true};
    case types.ADD_COMMENT_FAILED:
      return {...state, comment: action.data, commentLoading: false};
    default:
      return state;
  }
};

export default commentReducers;
