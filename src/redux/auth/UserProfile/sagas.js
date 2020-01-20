import {put, takeLatest, call, all} from 'redux-saga/effects';
import {editUserApi} from '../../../api/auth';
import * as updateUserProfileTypes from './actionTypes';
import * as loginAction from '../Login/actions';
import * as updateActions from './actions';
import AsyncStorage from '@react-native-community/async-storage';
import {showInAppNotification} from '../../../navigation/showInAppNotification';

function* updateUserProfile(action) {
  try {
    const response = yield call(editUserApi, action.payload);
    yield put(updateActions.updateUserProfileSuccess(response.data.Data));
    yield put(loginAction.loginSuccess(response.data.Data));
    AsyncStorage.setItem('userData', JSON.stringify(response.data.Data));
    showInAppNotification('Cập nhật', 'Cập nhật thông tin thành công');
  } catch (error) {
    showInAppNotification('Cập nhật', error.data.Message, 'error');
    yield put(updateActions.updateUserProfileFail(error));
  }
}

const rootSagaUpdateUserProfile = () => [
  takeLatest(updateUserProfileTypes.UPDATE_USER_PROFILE, updateUserProfile),
];
export default rootSagaUpdateUserProfile();
