import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import SideBarReducers from './sideBar/reducer';

import registerReducer from './auth/Register/reducer';
import loginReducer from './auth/Login/reducer';
import cartReducers from './cart/reducer';
import commentReducers from './comment/reducer';
import updateUserProfileReducer from './auth/UserProfile/reducer';

const rootReducer = combineReducers({
  homeReducer,
  registerReducer,
  loginReducer,
  SideBarReducers,
  cartReducers,
  commentReducers,
  updateUserProfileReducer,
});

export default rootReducer;
