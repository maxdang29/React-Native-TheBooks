import callApi from './apiCaller';

export const getAllCategoriesRequest = data => {
  return callApi('/api/categories', 'GET', data);
};
