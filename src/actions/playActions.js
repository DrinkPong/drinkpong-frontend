import * as actionTypes from './actionTypes';

export function decreaseCupCountBot(data) {
  return { type: actionTypes.DECREASE_CUP_COUNT_BOT, play: data }
}

export function decreaseCupCountHuman(data) {
  return { type: actionTypes.DECREASE_CUP_COUNT_HUMAN, play: data }
}
