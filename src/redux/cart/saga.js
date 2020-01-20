import {put, takeLatest, call} from 'redux-saga/effects';
import * as ActionTypes from '../cart/actions/typesAction';
import * as CartActions from '../cart/actions/actions';
import store from '../store';
import {showConfirmAlert} from '../../navigation/showConfirmAlert';
import {goAnotherScreen} from '../../navigation/navigation';
import {showInAppNotification} from '../../navigation/showInAppNotification';
import AsyncStorage from '@react-native-community/async-storage';

import {
  addToCartRequest,
  getAllItemInCartRequest,
  updateItemInCartRequest,
  deleteItemInCartRequest,
} from '../../api/books';

function* addToCart(actions) {
  try {
    const response = yield call(addToCartRequest, actions.data, actions.Token);
    if (response.status === 200) {
      const newItem =
        response.data.Data.Items[response.data.Data.Items.length - 1];
      yield put(CartActions.addToCartSuccess(newItem));
      const cartId = yield AsyncStorage.getItem('cartId');
      showConfirmAlert(
        'Thêm vào giỏ thành công',
        'Thêm sản phẩm vào giỏ thành công ! Bạn có muốn đến giỏ hàng không ?',
        [
          {
            text: 'Tắt thông báo',
          },
          {
            text: 'Đến giỏ hàng',
            onPress: () => {
              goAnotherScreen('Cart', null, 'Giỏ hàng');
            },
          },
        ],
      );
    }
  } catch (error) {
    showInAppNotification('Thêm vào giỏ thất bại', error.data.Message, 'error');
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
    if (response.status === 200) {
      yield put(
        CartActions.getAllItemByCartIdSuccess(response.data.Data.Items),
      );
    }
  } catch (error) {
    yield put(CartActions.getAllItemByCartIdFailed(error));
  }
}

function* updateItemInCart(actions) {
  try {
    const response = yield call(
      updateItemInCartRequest,
      actions.id,
      actions.data,
      actions.Token,
    );
    const allData = yield store.getState().cartReducer;
    const newList = yield allData.data.map(item => {
      if (item.Book.Id === actions.data.BookId) {
        if (item.Book.Quantity >= actions.data.Quantity) {
          item.Quantity = actions.data.Quantity;
        }
        return item;
      } else {
        return item;
      }
    });
    yield put(CartActions.updateItemInCartSuccess(newList));
    showInAppNotification(
      'Thay đổi số lượng thành công ',
      response.data.Message,
      'success',
    );
  } catch (error) {
    showInAppNotification(
      'Thay đổi số lượng thất bại',
      error.data.Message,
      'error',
    );
    yield put(CartActions.updateItemInCartFailed(error));
  }
}

function* deleteAnItemInCart(actions) {
  try {
    const response = yield call(
      deleteItemInCartRequest,
      actions.data,
      actions.Token,
    );
    const allData = yield store.getState().cartReducer;
    const newList = yield allData.data.filter(item => {
      return item.Book.Id !== actions.data.BookId;
    });
    if (response.status === 200) {
      yield put(CartActions.deleteItemInCartSuccess(newList));
      showInAppNotification(
        'Xóa thành công ',
        response.data.Message,
        'success',
      );
    }
  } catch (error) {
    showInAppNotification('Xóa thất bại', error.data.ErrorCode, 'error');
    yield put(CartActions.deleteItemInCartFailed(error));
  }
}

const rootSagaCart = () => [
  takeLatest(ActionTypes.ADD_TO_CART, addToCart),
  takeLatest(ActionTypes.GET_ALL_ITEM_IN_CART, getAllItemInCardById),
  takeLatest(ActionTypes.UPDATE_ITEM_IN_CART, updateItemInCart),
  takeLatest(ActionTypes.DELETE_ITEM_IN_CART, deleteAnItemInCart),
];

export default rootSagaCart();
