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

export const getReviewBook = data => {
  return {
    type: types.GET_REVIEW_BOOK,
    data: data,
  };
};

export const getReviewBookSuccess = data => {
  return {
    type: types.GET_REVIEW_BOOK_SUCCESS,
    data,
  };
};

export const getReviewBookFailure = error => {
  return {
    type: types.GET_REVIEW_BOOK_FAILURE,
    error,
  };
};

export const deleteReviewBook = (id, token) => {
  return {
    type: types.DELETE_REVIEW_BOOK,
    id: id,
    token,
  };
};

export const deleteReviewBookSuccess = data => {
  return {
    type: types.DELETE_REVIEW_BOOK_SUCCESS,
    data,
  };
};

export const deleteReviewBookFailed = error => {
  return {
    type: types.DELETE_REVIEW_BOOK_FAILURE,
    error,
  };
};

export const updateComment = (id, data, token) => {
  return {
    type: types.UPDATE_REVIEW_BOOK,
    id,
    data,
    token,
  };
};
export const updateCommentFailed = error => {
  return {
    type: types.UPDATE_REVIEW_BOOK_FAILURE,
    error,
  };
};
export const updateCommentSuccess = data => {
  return {
    type: types.UPDATE_REVIEW_BOOK_SUCCESS,
    data,
  };
};
