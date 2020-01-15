import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../cart/actions/typesAction';
import * as CartActions from '../cart/actions/actions';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

import {addToCartRequest, getAllItemInCartRequest} from '../../api/books';

function* addToCart(actions) {
  try {
    const response = yield call(addToCartRequest, actions.data, actions.Token);
    const newItem =
      response.data.Data.Items[response.data.Data.Items.length - 1];
    yield put(CartActions.addToCartSuccess(newItem));
    ToastAndroid.show('thêm vào giỏ hàng thành công !', ToastAndroid.SHORT);
  } catch (error) {
    ToastAndroid.show('Thất bại !', ToastAndroid.SHORT);
    yield put(CartActions.addToCartFailed(error));
  }
}

function* getAllItemInCardById(actions) {
  try {
    const response = yield call(
      getAllItemInCartRequest,
      actions.data,
      actions.Token,
    );
    if (response.data.Data) {
      yield put(
        CartActions.getAllItemByCartIdSuccess(response.data.Data.Items),
      );
    }
  } catch (error) {
    yield put(CartActions.getAllItemByCartIdFailed(error));
  }
}

const rootSagaCart = () => [
  takeLatest(ActionTypes.ADD_TO_CART, addToCart),
  takeLatest(ActionTypes.GET_ALL_ITEM_IN_CART, getAllItemInCardById),
];
export default rootSagaCart();
