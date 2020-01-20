import callApi from './apiCaller';

export const postOrderRequest = (data, token) => {
    return callApi('/api/orders', 'POST', data, token);
  };