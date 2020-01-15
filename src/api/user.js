import callApi from './apiCaller';

export const getAllMembershipCodeRequest = () => {
  return callApi(
    '/api/generatedMemberships?Status=Active&pageNumber=1',
    'GET',
    null,
    'WVlDclUvVzBRcnl6YkhkVUN6R1JlRVIxSjhjeE10Zy82V3E5eEcrOUdEU3ZWL2tvbUQxaDg0bEYvd1hXUTE0SA==',
  );
};
