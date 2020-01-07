import callApi from './apiCaller';

export const getAllBookRequest = data => {
  return callApi('/api/cms/home', 'GET', data);
};
