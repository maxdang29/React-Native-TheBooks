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

export const updateItemInCart = (id, data, Token) => {
  return {
    type: types.UPDATE_ITEM_IN_CART,
    id,
    data,
    Token,
  };
};

export const updateItemInCartFailed = error => {
  return {
    type: types.UPDATE_ITEM_IN_CART_FAILED,
    error,
  };
};
export const updateItemInCartSuccess = data => {
  return {
    type: types.UPDATE_ITEM_IN_CART_SUCCESS,
    data,
  };
};

export const deleteItemInCart = (data, Token) => {
  return {
    type: types.DELETE_ITEM_IN_CART,
    data,
    Token,
  };
};

export const deleteItemInCartFailed = error => {
  return {
    type: types.DELETE_ITEM_IN_CART_FAILED,
    error,
  };
};

export const deleteItemInCartSuccess = data => {
  return {
    type: types.DELETE_ITEM_IN_CART_SUCCESS,
    data,
  };
};
