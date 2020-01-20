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
