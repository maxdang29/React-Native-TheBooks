import {put, takeLatest, call, all} from 'redux-saga/effects';
import {registerApi} from '../../../api/auth';
import * as registerType from './actionTypes';
import * as registerActions from './actions';
import AsyncStorage from '@react-native-community/async-storage';
import {showInAppNotification} from '../../../navigation/showInAppNotification';

function* register(action) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(registerActions.registerSuccess(response.data.Data));
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
    showInAppNotification('Đăng Kí thành công', 'Chào mừng đến với The Books');
  } catch (error) {
    showInAppNotification('Đăng kí', error.data.Message, 'error');
    yield put(registerActions.registerFail(error));
  }
}

const rootSagaRegister = () => [takeLatest(registerType.REGISTER, register)];
export default rootSagaRegister();
