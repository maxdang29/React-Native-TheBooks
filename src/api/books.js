import callApi from './apiCaller';

export const getAllBookRequest = data => {
  return callApi('/api/cms/home', 'GET', data);
};

export const getRelatedBookRequest = data => {
  return callApi('/api/books/' + data + '/relatedbooks', 'GET', null);
};

export const getReviewBookRequest = data => {
  return callApi('/api/reviews', 'GET', null);
};
