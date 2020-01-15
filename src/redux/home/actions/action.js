import * as types from './typesAction';

export const getCmsHomeSummary = () => {
  return {
    type: types.GET_CMS_HOME_SUMMARY,
  };
};

export const getCmsHomeSummaryFailed = error => {
  return {
    type: types.GET_CMS_HOME_SUMMARY_FAILED,
    error,
  };
};
export const getCmsHomeSummarySuccess = data => {
  return {
    type: types.GET_CMS_HOME_SUMMARY_SUCCESS,
    data,
  };
};

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


export const getBookSuggestion = () => {
  return {
    type: types.GET_BOOK_SUGGESTION,
  };
};

export const getBookSuggestionFailed = error => {
  return {
    type: types.GET_BOOK_SUGGESTION_FAILED,
    error,
  };
};
export const getBookSuggestionSuccess = data => {
  return {
    type: types.GET_BOOK_SUGGESTION_SUCCESS,
    data,
  };
};

//getBestUsers

export const getBestUsers = () => {
  return {
    type: types.GET_BEST_USER,
  };
};

export const getBestUsersFailed = error => {
  return {
    type: types.GET_BEST_USER_FAILED,
    error,
  };
};
export const getBestUsersSuccess = data => {
  return {
    type: types.GET_BEST_USER_SUCCESS,
    data,
  };
};

//getBestReviews
export const getBestReviews = () => {
  return {
    type: types.GET_BEST_REVIEW,
  };
};

export const getBestReviewsFailed = error => {
  return {
    type: types.GET_BEST_REVIEW_FAILED,
    error,
  };
};
export const getBestReviewsSuccess = data => {
  return {
    type: types.GET_BEST_REVIEW_SUCCESS,
    data,
  };
};
