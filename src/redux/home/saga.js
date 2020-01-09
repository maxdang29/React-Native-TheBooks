import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../home/actions/typesAction';
import * as BookActions from '../home/actions/action';
// import store from '../store';
import store from '../store';
import {
  getCmsHomeSummaryRequest,
  getAllBookRequest,
  getRelatedBookRequest,
  getReviewBookRequest,
  getBookSuggestionRequest,
} from '../../api/books';

function* getCmsHomeSummary(actions) {
  try {
    const response = yield call(getCmsHomeSummaryRequest, null);
    if (response.data.Data) {
      yield put(BookActions.getCmsHomeSummarySuccess(response.data.Data));
    }
  } catch (error) {
    yield put(BookActions.getCmsHomeSummaryFailed(error));
  }
}

function* getAllBook(actions) {
  try {
    const response = yield call(getAllBookRequest, null);

    if (response.data) {
      yield put(BookActions.getAllBookSuccess(response.data.Books));
    }
  } catch (error) {
    yield put(BookActions.getAllBookFailed(error));
  }
}
function* getBookSuggestion(actions) {
  try {
    const response = yield call(getBookSuggestionRequest, null);

    if (response.data) {
      yield put(BookActions.getBookSuggestionSuccess(response.data.Data));
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
  takeLatest(ActionTypes.GET_CMS_HOME_SUMMARY, getCmsHomeSummary),
  takeLatest(ActionTypes.GET_BOOK_SUGGESTION, getBookSuggestion),
];
export default rootSagaHome();
