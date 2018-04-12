// react
import React from 'react'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../actions/actionTypes';
import { updateTargetCupX, updateTargetCupY, updateLaunchAfterTargetLock, updateTheta, updatePhi, sendDataToBot } from '../reducers/admin'

// other third party
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Button, Checkbox, Icon, Input } from 'semantic-ui-react';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickButtonAdmin = this.onClickButtonAdmin.bind(this);
  }
  onChangeHandler(oEvent) {
    switch (oEvent.target.name) {
      case actionTypes.SET_TARGET_CUP_X:
        updateTargetCupX(oEvent.target.value);
        break;
      case actionTypes.SET_TARGET_CUP_Y:
        updateTargetCupY(oEvent.target.value);
        break;
      case actionTypes.SET_LAUNCH_AFTER_TARGET_LOCK:
        updateLaunchAfterTargetLock(oEvent.target.value);
        break;
      case actionTypes.SET_THETA:
        updateTheta(oEvent.target.value);
        break;
      case actionTypes.SET_PHI:
        updatePhi(oEvent.target.value);
        break;
    }
  }
  onClickButtonAdmin(sAction) {
    console.log("here");
    console.log(sAction);
    sendDataToBot(sAction); // reducer function
  }
  render () {
    const { sTargetCupX, sTargetCupY, bLaunchAfterTargetLock, sTheta, sPhi } = this.props; // get state from redux store (cleans up markup below)
    return (
      <div>
        <h1>Admin Page</h1>
        <Grid textAlign="center" verticalAlign="middle" style={{height:'100%'}}>
        <Grid.Row columns={3}>
          <Input label="Cup X Distance (Meters)" placeholder="2.1" className="medium" name={actionTypes.SET_TARGET_CUP_X} onChange={this.onChangeHandler} value={sTargetCupX}/>
          <Input label="Cup Y Distance (Meters)" placeholder=".2" className="medium" name={actionTypes.SET_TARGET_CUP_Y} onChange={this.onChangeHandler} value={sTargetCupY}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Checkbox label="Launch a ball immediately after target lock?" onChange={this.onChangeHandler} value={bLaunchAfterTargetLock}/>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_TARGET_COORDINATES)}>SET TARGET COORDINATES</Button>
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
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.GET_JOKE)}>TEST CHUCK NORRIS JOKE</Button>
        </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// connect redux to this component
export default connect(
  (state) => ({admin: state.admin}),
  { updateTargetCupX, updateTargetCupY, updateLaunchAfterTargetLock, updateTheta, updatePhi }
)(Admin);
