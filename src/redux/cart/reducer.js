import * as types from './actions/typesAction';

const init = {
  data: [],
};

const cartReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_TO_CART_SUCCESS:
      console.log('reducer: ', action.data);
      return {...state, data: action.data};
    case types.GET_ALL_ITEM_IN_CART_SUCCESS:
      console.log('reducer get all cart: ', action.data);
      return {...state, data: action.data};
    default:
      return state;
  }
};

export default cartReducers;
