import React from 'react'
import PropTypes from 'prop-types'
import '../styles/App.css';

import { connect } from 'react-redux'

import Rack from './Rack.js'
import { Grid } from 'semantic-ui-react';
import * as constants from '../constants/constants'

import { cupMade } from '../reducers/play'

let arrowLeft = require('../images/arrow_left.png');
let arrowRight = require('../images/arrow_right.png');

class Play extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { sTurn, iHumanScore, iBotScore, aCupsRemainingHuman, aCupsRemainingBot } = this.props.play; // get state from redux store (cleans up markup below)
    let sTurnText, sClassName;
    if (sTurn === constants.HUMAN) {
      sTurnText = "It's the HUMAN's turn!";
    } else {
      sTurnText = "It's the BOT's turn!";
    }
    sClassName = "arrow--" + sTurn;
    console.log(sTurn);
    console.log(aCupsRemainingHuman);
    // <img src={arrow} className={'arrow--' + sTurn}/>
    // <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 700 700" className={sClassName}>
    //   <path d="M.7 0c1.9 0 700 350 699.3 350.6C697.6 352.6.5 700.6.3 700c-.2-.4 33.7-79.3 75.2-175.3l75.6-174.5-75.6-174.3C34 80.1 0 1.3 0 1c0-.6.3-1 .7-1z" fill="#fff"/>
    // </svg>
    return (
      <div>
        <h1>PLAY!</h1>
        <br/>
        <h1>SCORE:</h1>
        <br/>
        <h1>{iHumanScore} (HUMAN) - {iBotScore} (BOT)</h1>
        <br/>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <h1>HUMANS'S CUPS</h1>
              <Rack sRackType={constants.HUMAN} aCupsRemaining={aCupsRemainingHuman}/>
            </Grid.Column>
            <Grid.Column>
              <h1>{sTurnText}</h1>
              <h1>SHOOTING DIRECTION:</h1>
              { sTurn === constants.HUMAN ? <img src={arrowRight} /> : <img src={arrowLeft} /> }
            </Grid.Column>
            <Grid.Column>
              <h1>BOT'S CUPS</h1>
              <Rack sRackType={constants.BOT} aCupsRemaining={aCupsRemainingBot}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="container">
<div className="path">
<span id="elem" className="shape trail"></span> 
</div>
</div>

      </div>
    );
  }
}

// connect redux to this component
export default connect(
  (state) => ({play: state.play}),
  { cupMade }
)(Play);
