import * as types from './actions/typesAction';

const init = {
  data: [],
  relatedBooks: [],
  search: [],
  error: undefined,
  searchSuggestion: [],
  bestUser: [],
  bestReview: [],
  loading: false,
};

const homeReducers = (state = init, action) => {
  switch (action.type) {
    case types.GET_CMS_HOME_SUMMARY:
      return {...state, loading: true};
    case types.GET_CMS_HOME_SUMMARY_SUCCESS:
      return {...state, data: action.data, loading: false};
    case types.GET_RELATED_BOOK_SUCCESS:
      return {...state, relatedBooks: action.data};
    case types.GET_ALL_BOOK:
      return {...state, loading: true};
    case types.GET_ALL_BOOK_SUCCESS:
      return {...state, search: action.data, loading: false};
    case types.GET_BOOK_SUGGESTION_SUCCESS:
      return {...state, searchSuggestion: action.data};

    case types.GET_BEST_USER_SUCCESS:
      return {...state, bestUser: action.data};
    case types.GET_BEST_REVIEW_SUCCESS:
      return {...state, bestReview: action.data};

    default:
      return state;
  }
};

export default homeReducers;
