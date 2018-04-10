import * as actionTypes from './actionTypes';

export function setTheta(data) {
  return { type: actionTypes.SET_THETA, admin: data }
}

export function setPhi(data) {
  return { type: actionTypes.SET_PHI, admin: data }
}
