import callApi from './apiCaller';

export const getAllMembershipCodeRequest = () => {
  return callApi(
    '/api/generatedmemberships',
    'GET',
    null,
    'akN4LzF5SzFnKys4N2ZTdVdKbDh3QUtISkd6T25PRmZNL3pTSm90Q1hZd1VKUWx5aVBFZWUvYWNZbE9zUVcxTw==',
  );
};
export const upgradeMemberShipRequest = (idUser, data, token) => {
  return callApi(
    '/api/users/' + idUser + '/updatemembership',
    'PUT',
    data,
    token,
  );
};
