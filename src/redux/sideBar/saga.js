import {put, takeLatest, call} from 'redux-saga/effects';
import * as actionTypes from '../sideBar/actions/typesAction';
import * as sideBarActions from '../sideBar/actions/actions';
import store from '../store';
import {getAllCategoriesRequest} from '../../api/categories';

function* getAllCategories(actions) {
  try {
    const response = yield call(getAllCategoriesRequest, null);
    if (response) {
      yield put(sideBarActions.getCategoriesSuccess(response.data.Data));
    }
  } catch (error) {
    alert(error);

    yield put(sideBarActions.getCategoriesFailed(error));
  }
}

const rootSagaSideBar = () => [
  takeLatest(actionTypes.GET_ALL_CATEGORIES, getAllCategories),
];
export default rootSagaSideBar();
