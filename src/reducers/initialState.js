import * as constants from '../constants/constants';

export default {
  admin: {
    sTheta: "",
    sPhi: "",
    sTargetCupX: "",
    sTargetCupY: "",
    bLaunchAfterTargetLock: false,
    sPointFor: constants.HUMAN,
    iCupIndex: "1",
    sMotorSpeedPercent: "0"
  },
  play: {
    sTurn: constants.HUMAN,
    iHumanScore: 0,
    iBotScore: 0,
    aCupsRemainingHuman: [true,true,true,true,true,true,true,true,true,true],
    aCupsRemainingBot: [true,true,true,true,true,true,true,true,true,true]
  }
};
