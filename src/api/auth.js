import callApi from './apiCaller';

export const loginApi = data => {
  return callApi('/api/Token', 'POST', data);
};
export const registerApi = data => {
  return callApi('/api/users', 'POST', data);
};
export const logoutApi = () => {
  return callApi('/api/Token', 'DELETE');
};
