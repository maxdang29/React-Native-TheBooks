import callApi from './apiCaller';

export const getCmsHomeSummaryRequest = data => {
  return callApi('/api/cms/home', 'GET', data);
};

export const getRelatedBookRequest = data => {
  return callApi('/api/books/' + data + '/relatedbooks', 'GET', null);
};

export const getAllBookRequest = data => {
  return callApi('/api/books', 'GET', data);
};

export const getBookSuggestionRequest = data => {
  return callApi('/api/Search/Suggestion', 'GET', data);
};

export const addToCartRequest = (data, Token) => {
  return callApi('/api/basket', 'POST', data, Token);
};

export const getAllItemInCartRequest = (data, Token) => {
  return callApi('/api/basket/' + data, 'GET', null, Token);
};
export const getBestUserRequest = data => {
  return callApi('/api/cms/bestusers', 'GET', data);
};

export const getBestReviewRequest = data => {
  return callApi('/api/cms/reviews', 'GET', data);
};

export const updateItemInCartRequest = (idBasket, data, token) => {
  return callApi('/api/basket/' + idBasket, 'PUT', data, token);
};

export const deleteItemInCartRequest = (data, token) => {
  return callApi('/api/basket/', 'DELETE', data, token);
};

export const postCommentRequest = (data, token) => {
  return callApi('/api/reviews', 'POST', data, token);
};
