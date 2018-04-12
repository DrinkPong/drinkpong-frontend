import { combineReducers } from 'redux';

// custom reducers - typically I like one per component
import admin from './admin';
import play from './play';

// combine reducers from all components
const rootReducer = combineReducers({
  admin
});

export default rootReducer;
