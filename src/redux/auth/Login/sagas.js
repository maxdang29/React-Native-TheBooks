import {put, takeLatest, call, all} from 'redux-saga/effects';
import {loginApi} from '../../../api/auth';
import * as loginType from './actionTypes';
import * as loginActions from './actions';
import AsyncStorage from '@react-native-community/async-storage';
import Navigation from 'react-native-navigation';
import {ToastAndroid} from 'react-native';
import {showInAppNotification} from '../../../navigation/showInAppNotification';

function* login(action) {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginActions.loginSuccess(response.data.Data));
    showInAppNotification('Đăng kí', 'Chào mừng đến với The Books');
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
  } catch (error) {
    showInAppNotification('Đăng nhập', error.data.Message, 'error');
    yield put(loginActions.loginFail(error));
  }
}

const rootSagaLogin = () => [takeLatest(loginType.LOGIN, login)];
export default rootSagaLogin();
