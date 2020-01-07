import * as types from './actions/typesAction';

const init = {
  data: [],
  error: undefined,
};

const homeReducers = (state = init, action) => {
  console.log('action 111', action);
  switch (action.type) {
    case types.GET_ALL_BOOK_SUCCESS:
      return {...state, data: action.data};

    default:
      return state;
  }
};

export default homeReducers;
