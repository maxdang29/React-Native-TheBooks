import callApi from './apiCaller';

export const getCmsHomeSummaryRequest = data => {
  return callApi('/api/cms/home', 'GET', data);
};
export const getAllBookRequest = data => {
  return callApi('/api/books', 'GET', data);
};

export const getBookSuggestionRequest = data => {
  return callApi('/api/Search/Suggestion', 'GET', data);
};
