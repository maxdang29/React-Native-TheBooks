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
    console.log('error comment', response.data);
    if (response) {
      yield put(commentAction.postCommentSuccess(response.data.Data));
    }
  } catch (error) {
    alert(error.data.Message);
    console.log('error comment', error.data);
    yield put(commentAction.postCommentFailed(error.data.Message));
  }
}

const rootSagaComment = () => [
  takeLatest(ActionTypes.ADD_COMMENT, postComment),
];
export default rootSagaComment();
