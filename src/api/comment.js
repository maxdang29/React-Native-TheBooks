import callApi from './apiCaller';

export const getReviewBookRequest = data => {
  return callApi('/api/reviews', 'GET', null);
};
export const postCommentRequest = (data, token) => {
  return callApi('/api/reviews', 'POST', data, token);
};
export const deleteCommentRequest = (id, token) => {
  return callApi('/api/reviews/' + id, 'DELETE', null, token);
};

export const updateCommentRequest = (id, data, token) => {
  return callApi('/api/reviews/' + id, 'PUT', data, token);
};
