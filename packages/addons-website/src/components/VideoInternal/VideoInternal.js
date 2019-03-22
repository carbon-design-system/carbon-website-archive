import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { settings } from 'carbon-components';
const { prefix } = settings;

import PlayPauseButton from '@carbon/addons-website/src/components/PlayPauseButton/'

class VideoInternal extends React.Component {
  state = {
    playing: true,
  }

  onPlayPauseClick = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if( nextState.playing !== this.state.playing ) {
      nextState.playing ? this.videoRef.play() : this.videoRef.pause()
    }
    return true
  }

  componentDidMount() {
    this.videoRef.addEventListener('ended', this.onVideoEnded)
  }

  onVideoEnded = () => {
    const { loop } = this.props

    if( !loop ) {
      this.setState({
        playing: false
      })
    }
  }

  componentWillUnmount() {
    this.videoRef.removeEventListener('ended', this.onVideoEnded)
  }

  render() {
    const { poster, src, loop, overlay, cornerPlayButton } = this.props
    const { playing } = this.state
    return (
      <div className={`${prefix}--video-internal-container`}>
        <video
          className={`${prefix}--video-internal`}
          controls={false}
          autoPlay 
          loop={loop}
          muted
          preload="auto" 
          playsInline
          poster={poster} 
          type="video/mp4"
          ref={video => (this.videoRef = video)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.

        </video>
        { overlay && <div className={`${prefix}--video-internal-overlay`} /> }
        { cornerPlayButton && <PlayPauseButton onClick={this.onPlayPauseClick} playing={playing} loop={loop} />}
      </div>
    );
  }
}

VideoInternal.propTypes = {
  
  // poster image path
  poster: PropTypes.string,

  // video image path
  src: PropTypes.string,

  // loop boolean
  loop: PropTypes.bool,

  // black overlay over video
  overlay: PropTypes.bool
}

export default VideoInternal;