import { combineReducers } from 'redux';

// custom reducers - one per component
import admin from './admin';
import play from './play';

// combine reducers from all components
const rootReducer = combineReducers({
  admin,
  play
});

export default rootReducer;
