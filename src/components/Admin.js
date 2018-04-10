import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionTypes from '../actions/actionTypes';
import * as adminActions from '../actions/adminActions';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Button, Icon, Input } from 'semantic-ui-react';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      sTheta: "",
      sPhi: ""
    }
    this.onClickButtonAdmin = this.onClickButtonAdmin.bind(this);
  }
  onClickButtonAdmin(sAction) {
    let sUrl;
    axios.post(sUrl)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render () {
    return (
      <div>
        <h1>Admin Page</h1>
        <Grid textAlign="center" verticalAlign="middle" style={{height:'100%'}}>
        <Grid.Row columns={2}>
          <Input placeholder="75" className="medium" onChange={this.props.adminActions.setTheta} value={this.state.sTheta}/>
          <Button primary className="medium" onClick={() => this.onClickButtonAdmin(actionTypes.SET_THETA)}>SET THETA (X DIRECTION ANGLE)</Button>
        </Grid.Row>
        <Grid.Row columns={2}>
        <Input placeholder="10" className="medium" onChange={this.props.adminActions.setPhi} value={this.state.sPhi}/>
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

// redux boilerplate functions and prop types
Admin.propTypes = {
  adminActions: PropTypes.object,
  admin: PropTypes.array
};

function mapStateToProps(state) {
  return {
    admin: state.admin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
