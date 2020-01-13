import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../comment/action/typesAction';
import * as commentAction from '../comment/action/actions';
// import store from '../store';
import store from '../store';
import {postCommentRequest} from '../../api/books';

function* postComment(actions) {
  try {
    const response = yield call(
      postCommentRequest,
      actions.data,
      actions.token,
    );
    console.log('response comment', response);

    if (response) {
      yield put(commentAction.postCommentSuccess(response.data.Data));
    }
  } catch (error) {
    yield put(commentAction.postCommentFailed(error));
  }
}

const rootSagaComment = () => [
  takeLatest(ActionTypes.ADD_COMMENT, postComment),
];
export default rootSagaComment();
