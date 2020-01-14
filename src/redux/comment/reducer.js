import * as types from './action/typesAction';

const init = {
  comment: [],
};

const homeReducers = (state = init, action) => {
  switch (action.type) {
    case types.ADD_COMMENT_SUCCESS:
      return {...state, comment: action.data};

    default:
      return state;
  }
};

export default homeReducers;
