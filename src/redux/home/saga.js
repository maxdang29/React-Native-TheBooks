import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../home/actions/typesAction';
import * as BookActions from '../home/actions/action';
import store from '../store';
import {getAllBookRequest} from '../../api/books';

function* getAllBook(actions) {
  console.log('object get all book ', actions);
  try {
    const response = yield call(getAllBookRequest, null);
    console.log('rescponse', response.data.Data);
    if (response.data.Data) {
      yield put(BookActions.getAllBookSuccess(response.data.Data));
    }
  } catch (error) {
    alert(error);
    yield put(BookActions.getAllBookFailed(error));
  }
}

const rootSagaHome = () => [takeLatest(ActionTypes.GET_ALL_BOOK, getAllBook)];
export default rootSagaHome();
