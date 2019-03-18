import React from 'react';
import PropTypes from 'prop-types'
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

  getIcon = () => {
    const { playing } = this.props
    const { hover } = this.state

    if(playing) {
      if (hover) return <PauseOutlineFilled20 />
      else return <PauseOutline20 />
    } else {
      if (hover) return <PlayOutlineFilled20 />
      else return <PlayOutline20 />
    }
  }

  render() {
    const { onClick } = this.props
    
    return (
      <button className={`${prefix}--play-pause-button`} 
              onMouseOver={this.onOver} 
              onMouseOut={this.onOut} 
              onClick={onClick}> 
        <span className={`${prefix}--play-pause-icon`}>
          {this.getIcon()}
        </span>
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