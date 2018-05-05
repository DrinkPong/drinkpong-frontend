import io from 'socket.io-client'; // client side of socket
import * as constants from '../constants/constants';
import * as actionTypes from '../actions/actionTypes';
import { cupMade } from '../reducers/play';
// import { updateTargetCupX, updateTargetCupY } from '../reducers/admin';

const socket = io(constants.hostName); // make sure it is from where the server is serving

export default class Client {
  constructor(store) {
    this.store = store;
    this.initalized = this.initalized.bind(this);
    this.cupMadeEvent = this.cupMadeEvent.bind(this);
    this.cupTargetCoordinatesSetEvent = this.cupTargetCoordinatesSetEvent.bind(this);
    this.thetaSetEvent = this.thetaSetEvent.bind(this);
    this.phiSetEvent = this.phiSetEvent.bind(this);


    // socket events (only 'cupMadeEvent' event right now)
    console.log('linking socket functions...');
    socket.on('initalized', this.initalized);
    socket.on('cupMadeEvent', this.cupMadeEvent); // link cupMadeEvent event from server to class method cupMadeEvent
    socket.on('cupTargetCoordinatesSetEvent', this.cupTargetCoordinatesSetEvent); // link cupMadeEvent event from server to class method cupMadeEvent
    socket.on('thetaSetEvent', this.thetaSetEvent);
    socket.on('phiSetEvent', this.phiSetEvent);
    console.log('socket functions linked!');
  }
  initalized() {
    console.log("socket initialized!!!");
  }
  cupMadeEvent(oMsg) {
    this.store.dispatch({type: actionTypes.CUP_MADE, payload: {sPointFor: oMsg.sPointFor, iCupIndex: oMsg.iCupIndex}});
  }
  cupTargetCoordinatesSetEvent(oMsg) {
    this.store.dispatch({type: actionTypes.SET_TARGET_CUP_X, payload: oMsg.sTargetCupX});
    this.store.dispatch({type: actionTypes.SET_TARGET_CUP_Y, payload: oMsg.sTargetCupY});
  }
  thetaSetEvent(oMsg) {
    console.log(oMsg);
    this.store.dispatch({type: actionTypes.SET_THETA, payload: oMsg.sTheta});
  }
  phiSetEvent(oMsg) {
    this.store.dispatch({type: actionTypes.SET_PHI, payload: oMsg.sPhi});
  }
}
