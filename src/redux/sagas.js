import rootSagaHome from './home/saga';
import rootSagaSideBar from './sideBar/saga';
import rootSagaRegister from './auth/Register/sagas';
import rootSagaLogin from './auth/Login/sagas';
import rootSagaCart from './cart/saga';
import rootSagaComment from './comment/saga';
import rootSagaMembership from './memberShip/saga';
import rootSagaOrder from './order/saga';
import {all} from 'redux-saga/effects';
export default function* root() {
  yield all([
    ...rootSagaHome,
    ...rootSagaRegister,
    ...rootSagaLogin,
    ...rootSagaSideBar,
    ...rootSagaCart,
    ...rootSagaComment,
    ...rootSagaMembership,
    ...rootSagaOrder,
  ]);
}
