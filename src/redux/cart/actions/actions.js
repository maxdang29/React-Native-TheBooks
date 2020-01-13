import * as types from './typesAction';

export const addToCart = (data, Token) => {
  return {
    type: types.ADD_TO_CART,
    data,
    Token,
  };
};

export const addToCartFailed = error => {
  return {
    type: types.ADD_TO_CART_FAILED,
    error,
  };
};

export const addToCartSuccess = data => {
  return {
    type: types.ADD_TO_CART_SUCCESS,
    data,
  };
};

export const getAllItemByCartId = (data, Token) => {
  return {
    type: types.GET_ALL_ITEM_IN_CART,
    data,
    Token,
  };
};

export const getAllItemByCartIdFailed = error => {
  return {
    type: types.GET_ALL_ITEM_IN_CART_FAILED,
    error,
  };
};
export const getAllItemByCartIdSuccess = data => {
  return {
    type: types.GET_ALL_ITEM_IN_CART_SUCCESS,
    data,
  };
};
