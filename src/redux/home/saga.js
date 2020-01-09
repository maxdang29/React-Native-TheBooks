import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../home/actions/typesAction';
import * as BookActions from '../home/actions/action';
// import store from '../store';
import {
  getAllBookRequest,
  getRelatedBookRequest,
  getReviewBookRequest,
} from '../../api/books';

function* getAllBook(actions) {
  try {
    const response = yield call(getAllBookRequest, null);

    if (response.data.Data) {
      yield put(BookActions.getAllBookSuccess(response.data.Data));
    }
  } catch (error) {
    yield put(BookActions.getAllBookFailed(error));
  }
}

function* getRelatedBook(actions) {
  try {
    const response = yield call(getRelatedBookRequest, actions.data);
    if (response.data.Data) {
      yield put(
        BookActions.getRelatedBookSuccess(response.data.Data.RelatedBooks),
      );
    }
  } catch (error) {
    console.log(error);
    yield put(BookActions.getRelatedBookFailure(error));
  }
}

function* getReviewBook(actions) {
  try {
    const response = yield call(getReviewBookRequest, null);
    const reviews = response.data.Reviews.filter(
      item => item.BookId === 'NwiXs4tl',
    );
    if (reviews) {
      yield put(BookActions.getReviewBookSuccess(reviews));
    }
  } catch (error) {
    console.log(error);
    yield put(BookActions.getReviewBookFailure(error));
  }
}

const rootSagaHome = () => [
  takeLatest(ActionTypes.GET_ALL_BOOK, getAllBook),
  takeLatest(ActionTypes.GET_RELATED_BOOK, getRelatedBook),
  takeLatest(ActionTypes.GET_REVIEW_BOOK, getReviewBook),
];
export default rootSagaHome();
