import {put, takeLatest, call} from 'redux-saga/effects';
import {
  getAllMembershipCodeRequest,
  upgradeMemberShipRequest,
} from '../../api/user';
import * as membershipActions from './actions/actions';
import * as ActionTypes from '../memberShip/actions/actionTypes';
import {goAnotherScreen} from '../../navigation/navigation';
import {showInAppNotification} from '../../navigation/showInAppNotification';
import {Navigation} from 'react-native-navigation';

function* getAllMembershipCode() {
  try {
    const response = yield call(getAllMembershipCodeRequest);
    yield put(
      membershipActions.getAllMembershipCodeSuccess(
        response.data.GeneratedMemberships,
      ),
    );
  } catch (error) {
    yield put(membershipActions.getAllMembershipCodeFailed(error));
  }
}
function* upgradeMemberShip(actions) {
  try {
    const response = yield call(
      upgradeMemberShipRequest,
      actions.idUser,
      actions.data,
      actions.token,
    );
    yield put(membershipActions.upgradeMembershipSuccess(response.data.Data));

    Navigation.dismissAllModals();
    goAnotherScreen('upgradeSuccess', response.data.Data.Membership.Name);
  } catch (error) {
    showInAppNotification('Nâng cấp thất bại', error.data.Message, 'error');

    yield put(membershipActions.upgradeMembershipFailed(error.data));
  }
}
const rootSagaMembership = () => [
  takeLatest(ActionTypes.GET_ALL_MEMBERSHIP_CODE, getAllMembershipCode),
  takeLatest(ActionTypes.UPGRADE_MEMBER_SHIP, upgradeMemberShip),
];

export default rootSagaMembership();
