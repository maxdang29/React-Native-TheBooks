import * as types from './actions/typesAction';

const init = {
  data: [],
  loading: false,
  error: [],
};

const orderReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_ORDER:
      return {...state, loading: true};
    case types.ADD_ORDER_SUCCESS:
      return {...state, loading: false};
    case types.ADD_ORDER_FAILED:
      return {...state, loading: false};
    case types.GET_ORDER_BY_ID:
      return {...state, loading: true};
    case types.GET_ORDER_BY_ID_FAILED:
      return {...state, error: [...action.error], loading: false};
    case types.GET_ORDER_BY_ID_SUCCESS:
      return {...state, data: [...action.data], loading: false};
    default:
      return state;
  }
};

export default orderReducers;
