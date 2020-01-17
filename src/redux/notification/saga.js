import {put, takeLatest, call} from 'redux-saga/effects';
import {
  getListOfUserNotificationsRequest,
  markAsSeenNotificationRequest,
} from '../../api/notification';
import * as actionTypes from './action/actionTypes';
import * as actionsNotice from '../notification/action/actions';

function* getListOfUserNotifications(action) {
  try {
    const response = yield call(
      getListOfUserNotificationsRequest,
      action.token,
    );
    yield put(
      actionsNotice.getListUserNotificationSuccess(
        response.data.UserNotifications,
      ),
    );
  } catch (error) {
    console.log('respon 123', error);
    yield put(actionsNotice.getListUserNotificationFailed(error));
  }
}

function* markAsSeenNotification(action) {
  try {
    const response = yield call(
      markAsSeenNotificationRequest,
      action.data,
      action.token,
    );
    yield put(actionsNotice.markAsSeenNotificationSuccess(response));
  } catch (error) {
    yield put(actionsNotice.markAsSeenNotificationFailed(error));
  }
}

const rootSagaNotice = () => [
  takeLatest(
    actionTypes.GET_LIST_USER_NOTIFICATIONS,
    getListOfUserNotifications,
  ),
  takeLatest(actionTypes.MARK_AS_SEEN_NOTIFICATIONS, markAsSeenNotification),
];

export default rootSagaNotice();
