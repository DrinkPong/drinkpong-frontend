import React from 'react'
import PropTypes from 'prop-types'
import { Emoji } from 'emoji-mart';

class Footer extends React.Component {
  render () {
    return (
      <footer style={{paddingBottom: '1rem'}}>
          The Umma Hussla Hackthon Winner <Emoji size='1.5rem' emoji=':wink:' sheetSize='64' set='apple'/> Project | Version 0.1.0
      </footer>
    );
  }
}

export default Footer;
