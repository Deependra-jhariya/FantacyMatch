import {SET_USER_DATA} from './SetUserActionType';

export const fetchUserData = () => ({
  type: SET_USER_DATA.API_SET_USER_DATA,
  payload,
});

export const fetchUserDataSuccess = data => ({
  type: SET_USER_DATA.API_SET_USER_SUCCESS,
  payload: data,
});

export const fetchUserDataError = error => ({
  type: SET_USER_DATA.API_SET_USER_ERROR,
  payload: error,
});

// for logout
export const fetchLogout = () => ({
  type: SET_USER_DATA.USER_LOGOUT,
});
