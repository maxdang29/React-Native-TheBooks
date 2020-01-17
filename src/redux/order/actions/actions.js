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
