import {put, takeLatest, call, all} from 'redux-saga/effects';
import {loginApi, logoutApi} from '../../../api/auth';
import * as loginType from './actionTypes';
import * as loginActions from './actions';
import AsyncStorage from '@react-native-community/async-storage';
import {showInAppNotification} from '../../../navigation/showInAppNotification';

function* login(action) {
  try {
    const response = yield call(loginApi, action.payload);

    yield put(
      loginActions.loginSuccess(
        response.data.Data,
        response.data.Token.access_token,
      ),
    );
    showInAppNotification('Đăng nhập', 'Chào mừng đến với The Books');
    yield AsyncStorage.setItem('userData', JSON.stringify(response.data.Data));
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
    yield AsyncStorage.setItem('cartId', response.data.Data.Basket.Id);
    yield AsyncStorage.setItem('userId', response.data.Data.Id);
  } catch (error) {
    showInAppNotification('Đăng nhập', error.data.Message, 'error');
    yield put(loginActions.loginFail(error));
  }
}

function* logout() {
  try {
    yield call(logoutApi);
    yield AsyncStorage.clear();
    yield AsyncStorage.setItem('start', 'startApp');
    yield put(loginActions.logout());
  } catch (error) {
    console.log('error', error);
  }
}

const rootSagaLogin = () => [
  takeLatest(loginType.LOGIN, login),
  takeLatest(loginType.LOGOUT, logout),
];
export default rootSagaLogin();
