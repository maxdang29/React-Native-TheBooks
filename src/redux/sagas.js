import rootSagaHome from './home/saga';
import rootSagaSideBar from './sideBar/saga';
import rootSagaRegister from './auth/Register/sagas';
import rootSagaLogin from './auth/Login/sagas';
import rootSagaCart from './cart/saga';
import rootSagaComment from './comment/saga';
import rootSagaUpdateUserProfile from './auth/UserProfile/sagas';
import {all} from 'redux-saga/effects';
export default function* root() {
  yield all([
    ...rootSagaHome,
    ...rootSagaRegister,
    ...rootSagaLogin,
    ...rootSagaSideBar,
    ...rootSagaCart,
    ...rootSagaComment,
    ...rootSagaUpdateUserProfile,
  ]);
}
