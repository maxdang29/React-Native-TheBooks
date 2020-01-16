import callApi from './apiCaller';

export const getAllMembershipCodeRequest = () => {
  return callApi(
    '/api/generatedmemberships',
    'GET',
    null,
    'akN4LzF5SzFnKys4N2ZTdVdKbDh3QUtISkd6T25PRmZNL3pTSm90Q1hZd1VKUWx5aVBFZWUvYWNZbE9zUVcxTw==',
  );
};
