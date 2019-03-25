import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
const { prefix } = settings;

import PlayPauseButton from '@carbon/addons-website/src/components/PlayPauseButton/';

class VideoInternal extends React.Component {
  state = {
    playing: true,
    hovering: false,
  };

  onPlayPauseClick = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.playing !== this.state.playing) {
      nextState.playing ? this.videoRef.play() : this.videoRef.pause();
    }
    return true;
  }

  componentDidMount() {
    this.videoRef.addEventListener('ended', this.onVideoEnded);
  }

  onVideoEnded = () => {
    const { loop } = this.props;

    if (!loop) {
      this.setState({
        playing: false,
      });
    }
  };

  onMouseOver = () => {
    this.setState({
      hovering: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      hovering: false,
    });
  };

  componentWillUnmount() {
    this.videoRef.removeEventListener('ended', this.onVideoEnded);
  }

  render() {
    const {
      poster,
      src,
      loop,
      overlay,
      cornerPlayButton,
      children,
    } = this.props;
    const { playing, hovering } = this.state;

    return (
      <div
        className={`${prefix}--video-internal-container`}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
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
          ref={video => (this.videoRef = video)}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {overlay && <div className={`${prefix}--video-internal-overlay`} />}
        {children}
        {
          <PlayPauseButton
            onClick={this.onPlayPauseClick}
            playing={playing}
            loop={loop}
            cornerPlayButton={cornerPlayButton}
            hovering={hovering}
          />
        }
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
  overlay: PropTypes.bool,

  // button in lower left corner
  cornerPlayButton: PropTypes.bool,
};

export default VideoInternal;
