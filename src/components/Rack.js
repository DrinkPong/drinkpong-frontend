import React from 'react'
import PropTypes from 'prop-types'
import RackRow from './RackRow.js'
import * as constants from '../constants/constants'
import { Grid } from 'semantic-ui-react';

class Rack extends React.Component {
  render () {
    let bMirror; // mirroring of beer pong racks depends on if it is human player or not
    switch (this.props.sRackType) {
      case constants.HUMAN:
        bMirror = true;
        break;
      case constants.BOT:
        bMirror = false;
        break;
    }
    return (
      <div>
        <Grid>
          <RackRow bMirror={bMirror} sType="1" bFirstCupVisible={this.props.aCupsRemaining[0]}/>
          <RackRow bMirror={bMirror} sType="2" bFirstCupVisible={this.props.aCupsRemaining[1]}/>
          <RackRow bMirror={bMirror} sType="3" bFirstCupVisible={this.props.aCupsRemaining[2]} bSecondCupVisible={this.props.aCupsRemaining[3]}/>
          <RackRow bMirror={bMirror} sType="4" bFirstCupVisible={this.props.aCupsRemaining[4]} bSecondCupVisible={this.props.aCupsRemaining[5]}/>
          <RackRow bMirror={bMirror} sType="3" bFirstCupVisible={this.props.aCupsRemaining[6]} bSecondCupVisible={this.props.aCupsRemaining[7]}/>
          <RackRow bMirror={bMirror} sType="2" bFirstCupVisible={this.props.aCupsRemaining[8]}/>
          <RackRow bMirror={bMirror} sType="1" bFirstCupVisible={this.props.aCupsRemaining[9]}/>
        </Grid>
      </div>
    );
  }
}

export default Rack;
