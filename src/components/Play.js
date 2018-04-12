import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Play extends React.Component {
  render () {
    return (
      <h1>PLAY!</h1>
    );
  }
}

export default connect(
  (state) => ({play: state.play})
)(Play);
