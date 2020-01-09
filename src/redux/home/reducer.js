import * as types from './actions/typesAction';

const init = {
  data: [],
  relatedBooks: [],
  reviewBooks: [],
  error: undefined,
};

const homeReducers = (state = init, action) => {
  switch (action.type) {
    case types.GET_ALL_BOOK_SUCCESS:
      return {...state, data: action.data};
    case types.GET_RELATED_BOOK_SUCCESS:
      return {...state, relatedBooks: action.data};
    case types.GET_REVIEW_BOOK_SUCCESS:
      return {...state, reviewBooks: action.data};

    default:
      return state;
  }
};

export default homeReducers;
