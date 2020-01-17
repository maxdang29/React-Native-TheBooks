import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import SideBarReducers from './sideBar/reducer';

import registerReducer from './auth/Register/reducer';
import loginReducer from './auth/Login/reducer';
import cartReducers from './cart/reducer';
import membershipReducer from './memberShip/reducer';
import commentReducers from './comment/reducer';
import orderReducers from './order/reducers';

const rootReducer = combineReducers({
  homeReducer,
  registerReducer,
  loginReducer,
  SideBarReducers,
  cartReducers,
  membershipReducer,
  commentReducers,
  orderReducers,
});

export default rootReducer;
