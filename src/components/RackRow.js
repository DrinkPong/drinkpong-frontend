import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react';

let beer = require('../images/noun_cup_white.png');

class RackRow extends React.Component {
  render () {
    let row;
      // all mirror row types
      if (this.props.bMirror) {
      switch (this.props.sType) {
        case "1":
          row = (
            <Grid.Row columns={4} style={{height:'75px'}}>
              <Grid.Column>
                  { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
            </Grid.Row>
          );
          break;
          case "2":
            row = (
              <Grid.Row columns={4} style={{height:'75px'}}>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>
                      { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }
                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
              </Grid.Row>
            )
            break;
            case "3":
              row = (
                <Grid.Row columns={4} style={{height:'75px'}}>
                  <Grid.Column>

                      { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                  </Grid.Column>
                  <Grid.Column>



                  </Grid.Column>
                  <Grid.Column>

                      { this.props.bSecondCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                  </Grid.Column>
                  <Grid.Column>



                  </Grid.Column>
                </Grid.Row>
              )
              break;
              case "4":
                row = (
                  <Grid.Row columns={4} style={{height:'75px'}}>
                    <Grid.Column>



                    </Grid.Column>
                    <Grid.Column>

                        { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                    </Grid.Column>
                    <Grid.Column>



                    </Grid.Column>
                    <Grid.Column>

                        { this.props.bSecondCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                    </Grid.Column>
                  </Grid.Row>
                )
                break;
      }
    } else {
      // mirrored types
      switch (this.props.sType) {
        case "1":
          row = (
            <Grid.Row columns={4} style={{height:'75px'}}>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>
                  { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }
              </Grid.Column>
            </Grid.Row>
          );
          break;
          case "2":
            row = (
              <Grid.Row columns={4} style={{height:'75px'}}>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
                <Grid.Column>
                      { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }
                </Grid.Column>
                <Grid.Column>

                </Grid.Column>
              </Grid.Row>
            )
            break;
            case "3":
              row = (
                <Grid.Row columns={4} style={{height:'75px'}}>
                  <Grid.Column>



                  </Grid.Column>
                  <Grid.Column>

                        { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                  </Grid.Column>
                  <Grid.Column>



                  </Grid.Column>
                  <Grid.Column>

                      { this.props.bSecondCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                  </Grid.Column>
                </Grid.Row>
              )
              break;
              case "4":
                row = (
                  <Grid.Row columns={4} style={{height:'75px'}}>
                    <Grid.Column>

                        { this.props.bFirstCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                    </Grid.Column>
                    <Grid.Column>



                    </Grid.Column>
                    <Grid.Column>

                          { this.props.bSecondCupVisible && <img src={beer} style={{width:'100px',height:'100px'}}/> }

                    </Grid.Column>
                    <Grid.Column>



                    </Grid.Column>
                  </Grid.Row>
                )
                break;
      }
    }
    return (
      row
    );
  }
}

export default RackRow;
