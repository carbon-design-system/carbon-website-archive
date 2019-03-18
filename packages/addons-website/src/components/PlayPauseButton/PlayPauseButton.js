import React from 'react';
import { settings } from 'carbon-components';
const { prefix } = settings;

import { PlayOutline20, PlayOutlineFilled20, PauseOutline20, PauseOutlineFilled20 } from "@carbon/icons-react/es";

class PlayPauseIcon extends React.Component {
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
      <button className={`${prefix}--play-pause-button`} onMouseOver={this.onOver} onMouseOut={this.onOut} onClick={onClick}> 
        <span className={`${prefix}--play-pause-icon`}>
          {this.getIcon()}
        </span>
      </button>
    );
  }
}

export default PlayPauseIcon;