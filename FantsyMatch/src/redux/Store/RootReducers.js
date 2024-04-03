import {createStore, applyMiddleware, combineReducers} from 'redux';
import UserDataReducer from '../Reducers/SetUserDataReducers';

const appReducers = combineReducers({
  UserDataReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducers(undefined, action)
  }
  return appReducers(state, action);

};

export default rootReducer;
