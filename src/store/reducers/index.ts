import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './loading';
import userReducer from './user';

const reducers = combineReducers({
  loading: uiReducer,
  user: userReducer,
});

export default reducers;
