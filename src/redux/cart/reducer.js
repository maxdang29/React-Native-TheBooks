import * as types from './actions/typesAction';

const init = {
  data: [],
  loadingCart: false,
  error: [],
};

const cartReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {...state, loadingCart: true};
    case types.ADD_TO_CART_SUCCESS:
      return {...state, data: action.data, loadingCart: false};
    case types.ADD_TO_CART_FAILED:
      return {...state, error: action.error, loadingCart: false};

    case types.GET_ALL_ITEM_IN_CART:
      return {...state, loadingCart: true};
    case types.GET_ALL_ITEM_IN_CART_FAILED:
      return {...state, error: action.error, loadingCart: false};
    case types.GET_ALL_ITEM_IN_CART_SUCCESS:
      return {...state, data: action.data, loadingCart: false};

    case types.UPDATE_ITEM_IN_CART:
      return {...state, loadingCart: true};
    case types.UPDATE_ITEM_IN_CART_FAILED:
      return {...state, error: action.error, loadingCart: false};
    case types.UPDATE_ITEM_IN_CART_SUCCESS:
      return {...state, data: action.data, loadingCart: false};

    case types.DELETE_ITEM_IN_CART:
      return {...state, loadingCart: true};
    case types.DELETE_ITEM_IN_CART_FAILED:
      return {...state, error: action.error, loadingCart: false};
    case types.DELETE_ITEM_IN_CART_SUCCESS:
      console.log('action delete', action);
      return {...state, data: action.data, loadingCart: false};
    default:
      return state;
  }
};

export default cartReducers;
