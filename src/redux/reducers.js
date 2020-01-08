import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import registerReducer from './auth/Register/reducer';
import loginReducer from './auth/Login/reducer';

const rootReducer = combineReducers({
  homeReducer,
  registerReducer,
  loginReducer,
});

export default rootReducer;
