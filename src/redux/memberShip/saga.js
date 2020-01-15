import {put, takeLatest, call} from 'redux-saga/effects';
import {getAllMembershipCodeRequest} from '../../api/user';
import * as membershipActions from './actions/actions';
import * as ActionTypes from '../memberShip/actions/actionTypes';

function* getAllMembershipCode() {
  try {
    const response = yield call(getAllMembershipCodeRequest);
    yield put(
      membershipActions.getAllMembershipCodeSuccess(
        response.data.GeneratedMemberships,
      ),
    );
  } catch (error) {
    console.log('respon ===>', error);
    yield put(membershipActions.getAllMembershipCodeFailed(error));
  }
}

const rootSagaMembership = () => [
  takeLatest(ActionTypes.GET_ALL_MEMBERSHIP_CODE, getAllMembershipCode),
];

export default rootSagaMembership();
