import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

// event creators
export const updateTargetCupX = (sTargetCupX) => ({type:actionTypes.SET_TARGET_CUP_X, payload: sTargetCupX});
export const updateTargetCupY = (sTargetCupY) => ({type:actionTypes.SET_TARGET_CUP_Y, payload: sTargetCupY});
export const updateLaunchAfterTargetLock = (bLaunchAfterTargetLock) => ({type:actionTypes.SET_LAUNCH_AFTER_TARGET_LOCK});
export const updateTheta = (sTheta) => ({type:actionTypes.SET_THETA, payload: sTheta});
export const updatePhi = (sPhi) => ({type:actionTypes.SET_PHI, payload: sPhi});
export const updatePointFor = (sPointFor) => ({type:actionTypes.SET_POINT_FOR, payload: sPointFor});
export const updateCupIndex = (iCupIndex) => ({type:actionTypes.SET_CUP_INDEX, payload: iCupIndex});
export const updateMotorSpeedPercent = (sMotorSpeedPercent) => ({type:actionTypes.SET_MOTOR_SPEED_PERCENT, payload: sMotorSpeedPercent});
export const sendDataToBot = (sAction) => ({type:actionTypes.SEND_DATA_TO_BOT, payload: sAction});

// probably something to put in sagas eventually
function callBotServer(oState, sAction) {
  let sUrl, sMethod;
  let oData = {};
  console.log("in callBotServer....");
  console.log(oState);
  switch (sAction) {
    case actionTypes.GET_TARGET_COORDINATES_FROM_CAMERA:
      console.log("getting coords yo");
      sMethod = "post";
      sUrl = "http://localhost:3000/postCupCoordinatesFromCamera";
      oData = { bLaunchAfterTargetLock: oState.bLaunchAfterTargetLock }; // getting hte coordinates can also trigger a launch if we so wish
      break;
    case actionTypes.SET_TARGET_COORDINATES:
      console.log("posting coords yo");
      sMethod = "post";
      if (oState.sTargetCupX === "" || oState.sTargetCupY === "") {
        return; // should return a new state with an error message set to true
      }
      sUrl = "http://localhost:3000/postTargetCupCoordinates";
      oData = { bLaunchAfterTargetLock: oState.bLaunchAfterTargetLock, fTargetCupX: parseFloat(oState.sTargetCupX), fTargetCupY: parseFloat(oState.sTargetCupY) };
      break;
    case actionTypes.LAUNCH:
      console.log("launching yo");
      sMethod = "post";
      sUrl = "http://localhost:3000/postLaunch";
      break;
    case actionTypes.SET_THETA:
      sMethod = "post";
      sUrl = "http://localhost:3000/postTheta";
      oData = { fTheta: parseFloat(oState.sTheta) };
      break;
    case actionTypes.SET_PHI:
      sMethod = "post";
      sUrl = "http://localhost:3000/postPhi";
      oData = { fPhi: parseFloat(oState.sPhi) };
      break;
    case actionTypes.GET_JOKE:
      sMethod = "post";
      sUrl = "http://localhost:3000/postJoke";
      break;
    case actionTypes.GET_CHUCK_NORRIS_JOKE:
      sMethod = "post";
      sUrl = "http://localhost:3000/postChuckNorrisJoke";
      break;
    case actionTypes.CUP_MADE:
      sMethod = "post";
      oData = { sPointFor: oState.sPointFor, iCupIndex: oState.iCupIndex }
      sUrl = "http://localhost:3000/postCupMade";
      break;
    case actionTypes.SET_MOTOR_SPEED_PERCENT:
      sMethod = "post";
      oData = { sMotorSpeedPercent: oState.sMotorSpeedPercent }
      sUrl = "http://localhost:3000/postMotorSpeedPercent";
      break;  
    case actionTypes.STOP_MOTORS:
      sMethod = "post";
      sUrl = "http://localhost:3000/postStopMotors";
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
export default (state = initialState.admin, action) => {
  console.log("in main reducer for admin!");
  console.log(action);
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
      console.log("about to set launch after target lock to: " + !state.bLaunchAfterTargetLock);
      return { ...state, bLaunchAfterTargetLock: !state.bLaunchAfterTargetLock };
    case actionTypes.SET_THETA:
      console.log('SET_THETA Action');
      return { ...state, sTheta: action.payload };
    case actionTypes.SET_PHI:
      console.log('SET_PHI Action');
      return { ...state, sPhi: action.payload };
    case actionTypes.SET_POINT_FOR:
      console.log('SET_POINT_FOR Action');
      return { ...state, sPointFor: action.payload };
    case actionTypes.SET_CUP_INDEX:
      console.log('SET_CUP_INDEX Action');
      return { ...state, iCupIndex: action.payload };
    case actionTypes.SET_MOTOR_SPEED_PERCENT:
      console.log('SET_MOTOR_SPEED_PERCENT');
      return { ...state, sMotorSpeedPercent: action.payload };
    case actionTypes.SEND_DATA_TO_BOT:
      callBotServer(state, action.payload); // side affect function
      return { ...state };
    default:
      return state;
  }
}
