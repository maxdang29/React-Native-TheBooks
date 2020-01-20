import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../../redux/order/actions/typesAction';
import * as Actions from '../../redux/order/actions/actions';
import {getAllOrderByIdRequest} from '../../api/order';

import {} from '../../api/order';

function* getOrder(action) {
  try {
    const response = yield call(
      getAllOrderByIdRequest,
      action.id,
      action.token,
    );
    yield put(Actions.getOrderByIdSuccess(response));
  } catch (error) {
    yield put(Actions.getOrderByIdFailed(error));
  }
}

const rootSagaOrder = () => [takeLatest(ActionTypes.GET_ORDER_BY_ID, getOrder)];
export default rootSagaOrder();
