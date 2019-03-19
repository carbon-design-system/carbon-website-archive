import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { settings } from 'carbon-components';
import { breakpoints } from "@carbon/layout/es";
const { prefix } = settings;

import { ArrowRight20 } from "@carbon/icons-react/es";
import VideoInternal from '@carbon/addons-website/src/components/VideoInternal/VideoInternal'
import PlayPauseButton from '@carbon/addons-website/src/components/PlayPauseButton/PlayPauseButton'

class HomepageVideo extends Component {
  state = {
    playing: true,
    loop: true
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const {loop } = this.state
    
    if (window.matchMedia(`(max-width: ${breakpoints.md.width})`).matches) {
      if( loop ) {
        this.setState({
          loop: false
        })
      } 
    } else {
      if ( !loop ) {
        this.setState({
          loop: true
        })
      }
    }
  }

  onPlayPauseClick = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  onVideoComplete = () => {
    this.setState({
      playing: false
    })
  }

  render() {
    const {loop, playing} = this.state

    return (
      <div className={`${prefix}--homepage-video-container ibm--offset-lg-4`}>
        <div className={`${prefix}--homepage-video-wrapper`}>
          <VideoInternal
            loop={loop}
            poster="images/hero-video-poster.jpg"
            src="videos/hero-video.mp4"
            playing={playing}
            onVideoComplete={this.onVideoComplete}
          />
          <div className={`${prefix}--homepage-video-overlay`} />
          <div className={`${prefix}--homepage-video-container-cta`}>
            <Link className={`${prefix}--homepage-video-cta`} to="/philosophy/">
              <p className={`${prefix}--type-expressive-heading-03 ibm-padding`}>Philosophy</p>
              <div className={`${prefix}--homepage-video-arrow-container ibm-padding`}>
                <ArrowRight20 className={`${prefix}--homepage-video-cta-icon`} />
              </div>
            </Link>
            <Link className={`${prefix}--homepage-video-cta`} to="/gallery/">
              <p className={`${prefix}--type-expressive-heading-03 ibm-padding`}>Gallery</p>
              <div className={`${prefix}--homepage-video-arrow-container ibm-padding`}>
                <ArrowRight20 className={`${prefix}--homepage-video-cta-icon`} />
              </div>
            </Link>
          </div>
           <PlayPauseButton onClick={this.onPlayPauseClick} playing={playing} />
        </div>
      </div>
    )
  }
}

export default HomepageVideo;