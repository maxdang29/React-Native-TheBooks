import {put, takeLatest, call, all} from 'redux-saga/effects';
import {registerApi} from '../../../api/auth';
import * as registerType from './actionTypes';
import * as registerActions from './actions';
import * as loginActions from '../Login/actions';
import AsyncStorage from '@react-native-community/async-storage';
import {showInAppNotification} from '../../../navigation/showInAppNotification';

function* register(action) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(
      registerActions.registerSuccess(
        response.data.Data,
        response.data.Token.access_token,
      ),
    );
    yield put(
      loginActions.loginSuccess(
        response.data.Data,
        response.data.Token.access_token,
      ),
    );
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
    yield AsyncStorage.setItem('cartId', response.data.Data.Basket.Id);
    yield AsyncStorage.setItem('userId', response.data.Data.Id);
    yield AsyncStorage.setItem('userData', JSON.stringify(response.data.Data));
    showInAppNotification('Đăng kí thành công', 'Chào mừng đến với The Books');
  } catch (error) {
    showInAppNotification('Đăng kí', error.data.Message, 'error');
    yield put(registerActions.registerFail(error));
  }
}

const rootSagaRegister = () => [takeLatest(registerType.REGISTER, register)];
export default rootSagaRegister();
