import * as types from './typesAction';
export const addOrder = () => {
  return {
    type: types.ADD_ORDER,
  };
};

export const addOrderFailed = error => {
  return {
    type: types.ADD_ORDER_FAILED,
    error,
  };
};
export const addOrderSuccess = data => {
  return {
    type: types.ADD_ORDER_SUCCESS,
    data,
  };
};

export const getOrderById = (id, token) => {
  return {
    type: types.GET_ORDER_BY_ID,
    id,
    token,
  };
};

export const getOrderByIdFailed = error => {
  return {
    type: types.GET_ORDER_BY_ID_FAILED,
    error,
  };
};
export const getOrderByIdSuccess = data => {
  return {
    type: types.GET_ORDER_BY_ID_SUCCESS,
    data,
  };
};
