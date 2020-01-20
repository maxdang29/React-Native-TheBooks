import * as updateUserProfileTypes from './actionTypes';

export const updateUserProfile = data => ({
  type: updateUserProfileTypes.UPDATE_USER_PROFILE,
  payload: data,
});
export const updateUserProfileSuccess = response => ({
  type: updateUserProfileTypes.UPDATE_USER_PROFILE_SUCCESS,
  payload: response,
});
export const updateUserProfileFail = error => ({
  type: updateUserProfileTypes.UPDATE_USER_PROFILE_FAIL,
  payload: error,
});
