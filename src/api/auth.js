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
export const editUserApi = data => {
  return callApi(
    `/api/users/${data.userId}/updateprofile`,
    'PUT',
    data.requestData,
    data.Token,
  );
};
