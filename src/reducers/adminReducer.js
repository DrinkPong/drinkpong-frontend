import initialState from './initialState';
import { SET_THETA, SET_PHI } from '../actions/actionTypes';

export default function admin(state = initialState.admin, action) {
  let newState;
  switch (action.type) {
    case SET_THETA:
      console.log('SET_THETA Action');
      return action;
    case SET_PHI:
      console.log('SET_PHI Action');
      return action;
    default:
      return state;
  }
}
