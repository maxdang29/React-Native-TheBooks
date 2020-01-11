import {put, takeLatest, call, all} from 'redux-saga/effects';
import {loginApi} from '../../../api/auth';
import * as loginType from './actionTypes';
import * as loginActions from './actions';
import AsyncStorage from '@react-native-community/async-storage';
import Navigation from 'react-native-navigation';
import {ToastAndroid} from 'react-native';

function* login(action) {
  //console.error('log-action.payload ', action.payload);
  try {
    const response = yield call(loginApi, action.payload);
    console.log('respon', response.data.Data);
    yield put(loginActions.loginSuccess(response.data.Data));
    ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    yield AsyncStorage.setItem('token', response.data.Token.access_token);
  } catch (error) {
    //console.log('log-er ', error);
    alert('errr' + JSON.stringify(error.data.Message));
    put(loginActions.loginFail(error));
  }
}
// function* logout() {
//   try {
//     yield put(AsyncStorage.clear());
//     yield put(
//       Navigation.setRoot({
//         root: {
//           stack: {
//             options: {
//               topBar: {
//                 visible: false,
//               },
//             },
//             children: [
//               {
//                 component: {
//                   name: 'Login',
//                 },
//               },
//             ],
//           },
//         },
//       }),
//     );
//   } catch (error) {}
// }
// export default function* loginWatcher() {
//   yield takeLatest(loginType.LOGIN, login);
// }
const rootSagaLogin = () => [takeLatest(loginType.LOGIN, login)];
export default rootSagaLogin();
