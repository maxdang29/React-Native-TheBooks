import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../comment/action/typesAction';
import * as commentAction from '../comment/action/actions';
import {showInAppNotification} from '../../navigation/showInAppNotification';
import store from '../store';
import {
  postCommentRequest,
  getReviewBookRequest,
  deleteCommentRequest,
  updateCommentRequest,
} from '../../api/comment';

function* postComment(actions) {
  try {
    const response = yield call(
      postCommentRequest,
      actions.data,
      actions.token,
    );
    if (response.data.Data) {
      var storeComment = yield store.getState().commentReducers.comment;
      yield storeComment.push(response.data.Data);
      yield put(commentAction.postCommentSuccess(storeComment));
    }
  } catch (error) {
    console.log(error.data.Message);
    showInAppNotification('Đánh giá thất bại', error.data.Message, 'error');

    yield put(commentAction.postCommentFailed(error.data.Message));
  }
}

function* getReviewBook(actions) {
  try {
    const response = yield call(getReviewBookRequest, null);
    const reviews = yield response.data.Reviews.filter(
      item => item.BookId === actions.data,
    );
    if (reviews) {
      yield put(commentAction.getReviewBookSuccess(reviews));
    }
  } catch (error) {
    console.log(error);
    yield put(commentAction.getReviewBookFailure(error));
  }
}

function* deleteReviewBook(actions) {
  try {
    const response = yield call(
      deleteCommentRequest,
      actions.id,
      actions.token,
    );

    if (response) {
      let allComment = store.getState().commentReducers.comment;
      var newData = yield allComment.filter(item => {
        return item.Id !== actions.id;
      });
      yield put(commentAction.deleteReviewBookSuccess(newData));
    }
  } catch (error) {
    console.log(error);
    yield put(commentAction.deleteReviewBookFailed(error));
  }
}

function* updateComment(actions) {
  try {
    const response = yield call(
      updateCommentRequest,
      actions.id,
      actions.data,
      actions.token,
    );
    var comments = yield store.getState().commentReducers.comment;

    if (response.data.Data) {
      let index = yield comments.findIndex(item => {
        return item.Id === actions.id;
      });

      (comments[index].Content = actions.data.Content),
        (comments[index].StarRating = actions.data.StarRating),
        yield put(commentAction.updateCommentSuccess(comments));
    }
  } catch (error) {
    console.log(error.data.Message);
    yield put(commentAction.updateCommentFailed(error.data.Message));
  }
}

const rootSagaComment = () => [
  takeLatest(ActionTypes.ADD_COMMENT, postComment),
  takeLatest(ActionTypes.GET_REVIEW_BOOK, getReviewBook),
  takeLatest(ActionTypes.DELETE_REVIEW_BOOK, deleteReviewBook),
  takeLatest(ActionTypes.UPDATE_REVIEW_BOOK, updateComment),
];
export default rootSagaComment();
