import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { settings } from 'carbon-components';
const { prefix } = settings;

import { PlayOutline20, PlayOutlineFilled20, PauseOutline20, PauseOutlineFilled20 } from "@carbon/icons-react/es";

class PlayPauseButton extends React.Component {
  state = {
    hover: false
  }

  onOver = () => {
    this.setState({
      hover: true
    })
  }
  
  onOut = () => {
    this.setState({
      hover: false
    })
  }

  render() {
    const { onClick, playing, loop } = this.props
    const { hover } = this.state
    
    return (
      <button className={classnames(`${prefix}--play-pause-button`, {
        [`${prefix}--play-pause-hide-on-mobile`]: loop
      })} 
              onMouseOver={this.onOver} 
              onMouseOut={this.onOut} 
              onClick={onClick}> 
        <span className={`${prefix}--play-pause-icon ${ playing && hover ? 'active' : ''}`}><PauseOutlineFilled20 /></span>
        <span className={`${prefix}--play-pause-icon ${ playing && !hover ? 'active' : ''}`}><PauseOutline20 /></span>
        <span className={`${prefix}--play-pause-icon ${ !playing && hover ? 'active' : ''}`}><PlayOutlineFilled20 /></span>
        <span className={`${prefix}--play-pause-icon ${ !playing && !hover ? 'active' : ''}`}><PlayOutline20 /></span>
      </button>
    );
  }
}

PlayPauseButton.propTypes = {

  // action to do on click
  onClick: PropTypes.func,

  // status of media
  playing: PropTypes.bool
}

export default PlayPauseButton;