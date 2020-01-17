import * as types from './actionTypes';

export const getListUserNotification = token => {
  return {
    type: types.GET_LIST_USER_NOTIFICATIONS,
    token,
  };
};

export const getListUserNotificationFailed = error => {
  return {
    type: types.GET_LIST_USER_NOTIFICATIONS_FAILED,
    error,
  };
};

export const getListUserNotificationSuccess = data => {
  return {
    type: types.GET_LIST_USER_NOTIFICATIONS_SUCCESS,
    data,
  };
};

export const markAsSeenNotification = (data, token) => {
  return {
    type: types.MARK_AS_SEEN_NOTIFICATIONS,
    data,
    token,
  };
};

export const markAsSeenNotificationFailed = error => {
  return {
    type: types.MARK_AS_SEEN_NOTIFICATIONS_FAILED,
    error,
  };
};

export const markAsSeenNotificationSuccess = data => {
  return {
    type: types.MARK_AS_SEEN_NOTIFICATIONS_SUCCESS,
    data,
  };
};
