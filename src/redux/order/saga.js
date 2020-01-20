import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../../redux/order/actions/typesAction';
import * as actionsOrder from '../order/actions/actions';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';
import {showInAppNotification} from '../../navigation/showInAppNotification';
import {postOrderRequest} from '../../api/order';
import {Navigation} from 'react-native-navigation';

function* addOrder(actions) {
  try {
    const response = yield call(postOrderRequest, actions.data, actions.token);
    yield put(actionsOrder.addOrderSuccess());

    showConfirmAlert(
      'Đặt hàng',
      'Sách đã được đặt thành công Bạn có thể theo dõi tại mục cá nhân',
      [
        {
          text: 'Cảm ơn',
          onPress: () => {
            Navigation.dismissModal(actions.componentId);
          },
        },
        {
          text: '',
        },
      ],
    );
  } catch (error) {
    showInAppNotification('Đặt sách thất bại', error.data.Message, 'error');

    console.log('error', error);
    yield put(actionsOrder.addOrderFailed(error));
  }
}
const rootSagaOrder = () => [takeLatest(ActionTypes.ADD_ORDER, addOrder)];
export default rootSagaOrder();
