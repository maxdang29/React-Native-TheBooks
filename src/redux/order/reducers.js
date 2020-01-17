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

    default:
      return state;
  }
};

export default orderReducers;
