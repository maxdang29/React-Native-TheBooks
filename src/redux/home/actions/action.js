import * as types from './typesAction';

export const getAllBook = () => {
  return {
    type: types.GET_ALL_BOOK,
  };
};

export const getAllBookFailed = error => {
  return {
    type: types.GET_ALL_BOOK_FAILED,
    error,
  };
};
export const getAllBookSuccess = data => {
  return {
    type: types.GET_ALL_BOOK_SUCCESS,
    data,
  };
};

export const getRelatedBook = data => {
  return {
    type: types.GET_RELATED_BOOK,
    data,
  };
};

export const getRelatedBookSuccess = data => {
  return {
    type: types.GET_RELATED_BOOK_SUCCESS,
    data,
  };
};

export const getRelatedBookFailure = error => {
  return {
    type: types.GET_RELATED_BOOK_FAILURE,
    error,
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
