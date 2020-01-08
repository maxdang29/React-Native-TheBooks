import * as types from './typesAction';

export const getAllCategories = () => {
  return {
    type: types.GET_ALL_CATEGORIES,
  };
};

export const getCategoriesSuccess = data => {
  return {
    type: types.GET_ALL_CATEGORIES_SUCCESS,
    data,
  };
};

export const getCategoriesFailed = error => {
  return {
    type: types.GET_ALL_CATEGORIES_FAILED,
    error,
  };
};
