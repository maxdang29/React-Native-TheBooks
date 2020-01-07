import * as types from './actions/typesAction';

const init = {
  books: [],
  error: undefined,
};

const homeReducers = (state = init, action) => {
  switch (action.type) {
    case types.GET_ALL_BOOK:
      return {...state, books: action.data};

    default:
      return state;
  }
};

export default homeReducers;
