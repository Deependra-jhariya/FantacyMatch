import axios from 'axios';
import {
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataError,
  fetchLogout
} from '../Actions/SetUserActionApi';

// Logout..
export const logoutActionCreator = () => async dispatch => {
  try {
    dispatch(fetchLogout());
  } catch (error) {
    console.log(error);
  }
};
