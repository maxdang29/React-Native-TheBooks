import * as types from './typesAction';

export const getAllBook = () => {
  console.log('get all book');
  return {
    type: types.GET_ALL_BOOK,
  };
};

export const getAllBookFailed = error => {
  return {
    type: types.GET_ALL_BOOK_FAILED,
    error,
  };
};
export const getAllBookSuccess = data => {
  return {
    type: types.GET_ALL_BOOK_SUCCESS,
    data,
  };
};
