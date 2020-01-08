import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import SideBarReducers from './sideBar/reducer';

const rootReducer = combineReducers({
  homeReducer,
  SideBarReducers,
});

export default rootReducer;
