import React from 'react';
import PropTypes from 'prop-types'
import { settings } from 'carbon-components';
const { prefix } = settings;

class VideoInternal extends React.Component {
  
  shouldComponentUpdate (nextProps) {
    // slight hack, not sure how else to make video be controlled by
    // by sibling component
    if( nextProps.playing !== this.props.playing ) {
      nextProps.playing ? this.videoRef.play() : this.videoRef.pause()
    }
    return true
  }

  componentDidMount() {
    this.videoRef.addEventListener('ended', this.onVideoEnded)
  }

  onVideoEnded = () => {
    const {onVideoComplete, loop } = this.props

    if( !loop ) {
      onVideoComplete()
    }
  }

  componentWillUnmount() {
    this.videoRef.removeEventListener('ended', this.onVideoEnded)
  }

  render() {
    const { poster, src, loop } = this.props
    return (
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
    );
  }
}

VideoInternal.propTypes = {
  
  // poster image path
  poster: PropTypes.string,

  // video image path
  src: PropTypes.string,

  // loop boolean
  loop: PropTypes.bool
}

export default VideoInternal;