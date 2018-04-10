import { combineReducers } from 'redux';
import admin from './adminReducer';
import play from './playReducer';

const rootReducer = combineReducers({
  admin
});

export default rootReducer;
