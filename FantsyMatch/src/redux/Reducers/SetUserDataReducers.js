import { SET_USER_DATA } from "../Actions/SetUserActionType";
const initialState = {
  loading: false,
  data: [],
  error: '',
};

const UserDataReducer = (state = initialState, action)  =>{
  switch (action.type) {

    case SET_USER_DATA.API_SET_USER_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_DATA.API_SET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
         error: null,
      };
      case SET_USER_DATA.USER_LOGOUT:
        return {
          ...state,
          userData: null, // Reset user data upon logout
        };
      // Other cases
    case SET_USER_DATA.API_SET_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      default:
      return state;
    }

}

export default UserDataReducer;
