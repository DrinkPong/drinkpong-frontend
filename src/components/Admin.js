// react
import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import * as actionTypes from '../actions/actionTypes';
import { updateTargetCupX, updateTargetCupY, updateLaunchAfterTargetLock, updateTheta, updatePhi, sendDataToBot, updatePointFor, updateCupIndex, updateMotorSpeedPercent } from '../reducers/admin'

// other third party and stuff
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Button, Checkbox, Icon, Input, Dropdown } from 'semantic-ui-react';
import * as constants from '../constants/constants';

const aStringIntegers = Array.apply(null, {length: 10}).map(Number.call, Number)
const aCupIndexes = aStringIntegers.map(iElement => { return {key: (iElement + 1).toString(), value: (iElement + 1).toString(), text: (iElement + 1).toString()} }); // write the cup indexes to the array type that semantic UI dropdown needs

console.log(aCupIndexes);

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickButtonAdmin = this.onClickButtonAdmin.bind(this);
    this.onToggle = this.onToggle.bind(this); // special toggle function because oEvent.target is weird for checkboxes
    this.onChangeDropdownPointFor = this.onChangeDropdownPointFor.bind(this);
    this.onChangeDropdownCupIndex = this.onChangeDropdownCupIndex.bind(this);
  }
  onChangeHandler(oEvent) {
    console.log(oEvent.target.name);
    switch (oEvent.target.name) {
      case actionTypes.SET_TARGET_CUP_X:
        this.props.updateTargetCupX(oEvent.target.value);
        break;
      case actionTypes.SET_TARGET_CUP_Y:
        this.props.updateTargetCupY(oEvent.target.value);
        break;
      case actionTypes.SET_THETA:
        this.props.updateTheta(oEvent.target.value);
        break;
      case actionTypes.SET_PHI:
        this.props.updatePhi(oEvent.target.value);
        break;
      case actionTypes.SET_MOTOR_SPEED_PERCENT:
        this.props.updateMotorSpeedPercent(oEvent.target.value);
        break;
    }
  }
  onToggle() {
      this.props.updateLaunchAfterTargetLock(); // toggles
  }
  onChangeDropdownPointFor(e, { value }) {
      this.props.updatePointFor(value);
  }
  onChangeDropdownCupIndex(e, { value }) {
      this.props.updateCupIndex(value);
  }
  // all buttons in this UI feed to directly to changing a setting on the robot / server (think redux-sagas)
  onClickButtonAdmin(sAction) {
    this.props.sendDataToBot(sAction); // reducer function
  }
  // while all fields are only relevant to the UI itself (pure redux)
  updateInputValue = (oEvent) => {
    const val = oEvent.target.value;
    const sName = oEvent.target.name;
    switch (sName) {
      case actionTypes.SET_TARGET_CUP_X:
        this.props.updateTargetCupX(val);
        break;
      case actionTypes.SET_TARGET_CUP_Y:
        this.props.updateTargetCupY(val);
        break;
      case actionTypes.SET_THETA:
        this.props.updateTheta(val);
        break;
      case actionTypes.SET_PHI:
        this.props.updatePhi(val);
        break;
    }
  }
  render () {
    const { sTargetCupX, sTargetCupY, bLaunchAfterTargetLock, sTheta, sPhi, sPointFor, iCupIndex, sMotorSpeedPercent } = this.props.admin; // get state from redux store (cleans up markup below)
    return (
      <div>
        <h1>Admin Page</h1>
        <Grid textAlign="center" verticalAlign="middle" style={{height:'100%'}}>
        <Grid.Row columns={1}>
          <h2><u>Get Cup Coordinates & Launch</u></h2>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.GET_TARGET_COORDINATES_FROM_CAMERA)}>GET TARGET COORDINATES FROM CAMERA</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <p>***NOTE: this will also set the corresponding angles and required motor speeds!</p>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h2><u>Set Custom Cup Coordinates & Launch</u></h2>
        </Grid.Row>
        <Grid.Row columns={3}>
          <Input label="Cup X Distance (Meters)" placeholder="2.1" className="medium" name={actionTypes.SET_TARGET_CUP_X} onChange={this.onChangeHandler} value={sTargetCupX}/>
          <Input label="Cup Y Distance (Meters)" placeholder=".2" className="medium" name={actionTypes.SET_TARGET_CUP_Y} onChange={this.onChangeHandler} value={sTargetCupY}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Checkbox label="Launch a ball immediately after target lock?" onChange={this.onToggle} checked={bLaunchAfterTargetLock}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_TARGET_COORDINATES)}>SET TARGET COORDINATES</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.LAUNCH)}>LAUNCH!</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h2><u>Set Servo Angles</u></h2>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Input label="Angle Theta (Degrees)" placeholder="75" className="medium" name={actionTypes.SET_THETA} onChange={this.onChangeHandler} value={sTheta}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_THETA)}>SET THETA (X DIRECTION ANGLE)</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Input label="Angle Phi (Degrees)" placeholder="10" className="medium" name={actionTypes.SET_PHI} onChange={this.onChangeHandler} value={sPhi}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_PHI)}>SET PHI (Y DIRECTION ANGLE)</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h2><u>Set Motor Speed</u></h2>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Input label="Motor Speed (Percent)" placeholder="35" className="medium" name={actionTypes.SET_MOTOR_SPEED_PERCENT} onChange={this.onChangeHandler} value={sMotorSpeedPercent}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_MOTOR_SPEED_PERCENT)}>SET MOTOR SPEED (X DIRECTION ANGLE)</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.STOP_MOTORS)}>STOP MOTORS</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h2><u>Miscellaneous Settings / Test Functions</u></h2>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h3>Simulating / Dispatching Cup Made Event:</h3>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Dropdown placeholder='Scoring Player' onChange={this.onChangeDropdownPointFor} search selection options={[{key: constants.HUMAN, value: constants.HUMAN, text: constants.HUMAN},{key: constants.BOT, value: constants.BOT, text: constants.BOT}]} value={sPointFor}/>
          <Dropdown placeholder='Cup Index' onChange={this.onChangeDropdownCupIndex} search selection options={aCupIndexes} value={iCupIndex}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.CUP_MADE)}>SIMULATE 'CUPMADE' EVENT</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <h3>Jokes:</h3>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.GET_JOKE)}>TEST CUSTOM JOKE</Button>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.GET_CHUCK_NORRIS_JOKE)}>TEST CHUCK NORRIS JOKE</Button>
        </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// connect redux to this component
export default connect(
  (state) => ({admin: state.admin}),
  { updateTargetCupX, updateTargetCupY, updateLaunchAfterTargetLock, updateTheta, updatePhi, sendDataToBot, updatePointFor, updateCupIndex, updateMotorSpeedPercent }
)(Admin);
