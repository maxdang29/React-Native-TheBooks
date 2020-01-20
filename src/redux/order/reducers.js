import * as types from './actions/typesAction';

const init = {
  data: [],
  loading: false,
  error: [],
};

const orderReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      return {...state, loadingCart: true};
    case types.GET_ORDER_BY_ID:
      return {...state, loadingCart: true};
    case types.GET_ORDER_BY_ID_FAILED:
      return {...state, error: [...action.error], loadingCart: false};
    case types.GET_ORDER_BY_ID_SUCCESS:
      return {...state, data: [...action.data], loadingCart: false};

    default:
      return state;
  }
};

export default orderReducers;
