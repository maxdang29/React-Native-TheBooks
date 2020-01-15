import {put, takeLatest, call, all} from 'redux-saga/effects';
import {registerApi} from '../../../api/auth';
import * as registerType from './actionTypes';
import * as registerActions from './actions';
//import {pushBottomTab} from '../../../navigation/pushBottomTab';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
//import startApp from '../../../navigation/startApp';

function* register(action) {
  try {
    const response = yield call(registerApi, action.payload);
    yield put(registerActions.registerSuccess(response.data.Data));
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
    ToastAndroid.show('Register Success', ToastAndroid.SHORT);
    //pushBottomTab();
    //startApp();
  } catch (error) {
    console.log('log-er ', error);
    alert(JSON.stringify(error.data.Message));
    yield put(registerActions.registerFail(error));
  }
}
// export default function* rootSagaRegister() {
//   yield takeLatest(registerType.REGISTER, register);
// }
const rootSagaRegister = () => [takeLatest(registerType.REGISTER, register)];
export default rootSagaRegister();
