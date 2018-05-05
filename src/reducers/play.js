import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';
import * as constants from '../constants/constants'

// event creators
export const cupMade = (sPointFor, iCupIndex) => {
  return {
    type: actionTypes.CUP_MADE,
    payload: {sPointFor: sPointFor, iCupIndex: iCupIndex}
  }
};

// main reducer for play
export default (state = initialState.play, action) => {
  console.log("in main reducer for play!");
  console.log(action);
  let newState, aCupsRemaining;
  switch (action.type) {
    case actionTypes.CUP_MADE:
      console.log('CUP_MADE Action');
      console.log(action);
      if (action.payload.sPointFor === constants.HUMAN) { // it was humans turn, we need to change the status of the cups made and change the turn to the bot and
        aCupsRemaining = state.aCupsRemainingBot; //
        if (aCupsRemaining[action.payload.iCupIndex - 1] !== false) {
          aCupsRemaining[action.payload.iCupIndex - 1] = false; // no longer remaining at this index
          return { ...state, aCupsRemainingBot: aCupsRemaining, sPointFor: constants.HUMAN, iHumanScore: state.iHumanScore + 1, sTurn: constants.BOT };
        }
      } else { // it was bots turn, we need to remove one of the cups the human is 'defending', and change hte turn back to human
        aCupsRemaining = state.aCupsRemainingHuman; //
        if (aCupsRemaining[action.payload.iCupIndex - 1] !== false) {
          aCupsRemaining[action.payload.iCupIndex - 1] = false; // no longer remaining at this index
          return { ...state, aCupsRemainingHuman: aCupsRemaining, sPointFor: constants.BOT, iBotScore: state.iBotScore + 1, sTurn: constants.HUMAN };
        }
      }
    default:
      return state;
  }
}
