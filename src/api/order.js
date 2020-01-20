import callApi from './apiCaller';

export const getAllOrderByIdRequest = (id, token) => {
  return callApi('/api/orders/' + id, 'GET', null, token);
};
