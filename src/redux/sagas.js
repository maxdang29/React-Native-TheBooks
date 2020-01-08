import rootSagaHome from './home/saga';
import rootSagaRegister from './auth/Register/sagas';
import rootSagaLogin from './auth/Login/sagas';
import {all} from 'redux-saga/effects';
export default function* root() {
  yield all([...rootSagaHome, ...rootSagaRegister, ...rootSagaLogin]);
}
