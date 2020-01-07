import rootSagaHome from './home/saga';
import {all} from 'redux-saga/effects';
export default function* root() {
  yield all([...rootSagaHome]);
}
