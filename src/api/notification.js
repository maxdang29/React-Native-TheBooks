import callApi from './apiCaller';

export const getListOfUserNotificationsRequest = token => {
  return callApi('/api/usernotifications', 'GET', null, token);
};

export const markAsSeenNotificationRequest = (data, token) => {
  return callApi('/api/usernotifications/seen', 'PUT', data, token);
};
