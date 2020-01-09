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
