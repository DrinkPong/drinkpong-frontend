import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

// event creators
export const updateTargetCupX = (sTargetCupX) => ({type:actionTypes.SET_TARGET_CUP_X, payload: sTargetCupX});
export const updateTargetCupY = (sTargetCupY) => ({type:actionTypes.SET_TARGET_CUP_Y, payload: sTargetCupY});
export const updateLaunchAfterTargetLock = (bLaunchAfterTargetLock) => ({type:actionTypes.SET_LAUNCH_AFTER_TARGET_LOCK, payload: bLaunchAfterTargetLock});
export const updateTheta = (sTheta) => ({type:actionTypes.SET_THETA, payload: sTheta});
export const updatePhi = (sPhi) => ({type:actionTypes.SET_PHI, payload: sPhi});
export const sendDataToBot = (sAction) => ({type:actionTypes.SEND_DATA_TO_BOT, payload: sAction});

// probably something to put in sagas eventually
function callBotServer(oState, sAction) {
  let sUrl, sMethod;
  let oData = {};
  console.log("in callBotServer....");
  switch (sAction) {
    case actionTypes.SET_TARGET_COORDINATES:
      sMethod = "set";
      if (oState.admin.sTargetCupX === "" || oState.admin.sTargetCupY === "") {
        return; // should return a new state with an error message set to true
      }
      sUrl = "http://localhost:3000/postTargetCupCoordinates";
      oData = { ...this.state };
      break;
    case actionTypes.SET_THETA:
      sMethod = "set";
      sUrl = "http://localhost:3000/postTheta";
      oData = { fTheta: parseFloat(oState.admin.sTheta) };
      break;
    case actionTypes.SET_PHI:
      sMethod = "set";
      sUrl = "http://localhost:3000/postPhi";
      oData = { fPhi: parseFloat(oState.admin.sPhi) };
      break;
    case actionTypes.GET_JOKE:
      sMethod = "get";
      sUrl = "http://localhost:3000/postJoke";
      break;
  }
  axios({method: sMethod, url: sUrl, data: oData})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// main reducer for admin
export default function admin(state = initialState.admin, action) {
  let newState;
  switch (action.type) {
    case actionTypes.SET_TARGET_CUP_X:
      console.log('SET_TARGET_CUP_X Action');
      return { ...state, sTargetCupX: action.payload };
    case actionTypes.SET_TARGET_CUP_Y:
      console.log('SET_TARGET_CUP_Y Action');
      return { ...state, sTargetCupY: action.payload };
    case actionTypes.SET_LAUNCH_AFTER_TARGET_LOCK:
      console.log('SET_LAUNCH_AFTER_TARGET_LOCK Action');
      return { ...state, bLaunchAfterTargetLock: action.payload };
    case actionTypes.SET_THETA:
      console.log('SET_THETA Action');
      return { ...state, sTheta: action.payload };
    case actionTypes.SET_PHI:
      console.log('SET_PHI Action');
      return { ...state, sPhi: action.payload };
    case actionTypes.SEND_DATA_TO_BOT:
      return callBotServer(state, action.payload);
    default:
      return state;
  }
}
