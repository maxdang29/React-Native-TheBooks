import * as types from './typesAction';
export const addOrder = (data, componentId, token) => {
  return {
    type: types.ADD_ORDER,
    data,
    componentId,
    token,
  };
};

export const addOrderFailed = error => {
  return {
    type: types.ADD_ORDER_FAILED,
    error,
  };
};
export const addOrderSuccess = () => {
  return {
    type: types.ADD_ORDER_SUCCESS,
  };
};
