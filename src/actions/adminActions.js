import * as actionTypes from './actionTypes';

export function setTargetCupX(data) {
  return { type: actionTypes.SET_TARGET_CUP_X, admin: data }
}

export function setTargetCupY(data) {
  return { type: actionTypes.SET_TARGET_CUP_Y, admin: data }
}

export function setTheta(data) {
  return { type: actionTypes.SET_THETA, admin: data }
}

export function setPhi(data) {
  return { type: actionTypes.SET_PHI, admin: data }
}
