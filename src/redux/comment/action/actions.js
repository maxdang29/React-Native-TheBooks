import * as types from './typesAction';

export const postComment = (data, token) => {
  return {
    type: types.ADD_COMMENT,
    data,
    token,
  };
};
export const postCommentFailed = error => {
  return {
    type: types.ADD_COMMENT_FAILED,
    error,
  };
};
export const postCommentSuccess = data => {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    data,
  };
};
