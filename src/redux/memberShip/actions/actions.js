import * as Actions from './actionTypes';

export const getAllMembershipCode = () => {
  return {
    type: Actions.GET_ALL_MEMBERSHIP_CODE,
  };
};

export const getAllMembershipCodeFailed = error => {
  return {
    type: Actions.GET_ALL_MEMBERSHIP_CODE_FAILED,
    error,
  };
};

export const getAllMembershipCodeSuccess = data => {
  return {
    type: Actions.GET_ALL_MEMBERSHIP_CODE_SUCCESS,
    data,
  };
};
