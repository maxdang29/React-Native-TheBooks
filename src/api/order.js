import callApi from './apiCaller';

export const postOrderRequest = (data, token) => {
    return callApi('/api/orders', 'POST', data, token);
  };
export const getAllOrderByIdRequest = (id, token) => {
  return callApi('/api/orders/' + id, 'GET', null, token);
};
