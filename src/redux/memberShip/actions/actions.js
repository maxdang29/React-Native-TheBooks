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

export const upgradeMembership = (idUser, data, token) => {
  return {
    type: Actions.UPGRADE_MEMBER_SHIP,
    idUser,
    data,
    token,
  };
};

export const upgradeMembershipFailed = error => {
  return {
    type: Actions.UPGRADE_MEMBER_SHIP_FAILED,
    error,
  };
};

export const upgradeMembershipSuccess = data => {
  return {
    type: Actions.UPGRADE_MEMBER_SHIP_SUCCESS,
    data,
  };
};
