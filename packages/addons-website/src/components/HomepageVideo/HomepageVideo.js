import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { settings } from 'carbon-components';
const { prefix } = settings;

import { ArrowRight20 } from "@carbon/icons-react/es";
import VideoInternal from '@carbon/addons-website/src/components/VideoInternal/VideoInternal'
import PlayPauseButton from '@carbon/addons-website/src/components/PlayPauseButton/PlayPauseButton'

// import { VideoInternal, PlayPauseButton } from '@carbon/addons-website'

class HomepageVideo extends Component {
  state = {
    playing: true
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
    return (
      <div className={`${prefix}--homepage-video-container ibm--offset-lg-4`}>
        <div className={`${prefix}--homepage-video-wrapper`}>
          <VideoInternal
            // loop={viewportWidth >= Number(breakpointsREM.md.replace('rem', ''))*16}
            loop={true}
            poster="images/hero-video-poster.jpg"
            src="videos/hero-video.mp4"
            playing={this.state.playing}
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
           <PlayPauseButton onClick={this.onPlayPauseClick} playing={this.state.playing} />
        </div>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className={`${prefix}--homepage-video-container`}>
  //       <div className={`${prefix}--homepage-video-wrapper`}>
  //         <VideoInternal
  //           // loop={viewportWidth >= Number(breakpointsREM.md.replace('rem', ''))*16}
  //           loop={true}
  //           poster="images/hero-video-poster.jpg"
  //           src="videos/hero-video.mp4"
  //           playing={this.state.playing}
  //           onVideoComplete={this.onVideoComplete}
  //         />
  //         <div className={`${prefix}--homepage-video-overlay`} />
  //         <Link className={`${prefix}--homepage-video-cta`} to="/philosophy/">
  //           <p className={`${prefix}--type-expressive-heading-03 ibm-padding`}>Philosophy</p>
  //           <div className={`${prefix}--homepage-video-arrow-container ibm-padding`}>
  //             {/* <ArrowRight20 className={`${prefix}--homepage-video-cta-icon`} /> */}
  //           </div>
  //         </Link>
  //         <Link className={`${prefix}--homepage-video-cta`} to="/gallery/">
  //           <p className={`${prefix}--type-expressive-heading-03 ibm-padding`}>Gallery</p>
  //           <div className={`${prefix}--homepage-video-arrow-container ibm-padding`}>
  //             {/* <ArrowRight20 className={`${prefix}--homepage-video-cta-icon`} /> */}
  //           </div>
  //         </Link>
  //         {/* <Block1
  //           title="Philosophy"
  //           link="/philosophy/"
  //           name="philosophy"
  //           isLong={true}
  //         />
  //         <Block2 
  //           title="Gallery" 
  //           link="/gallery/" 
  //           name="gallery" 
  //           isLong={true} /> */}
  //       </div>

  //       <PlayPauseButton onClick={this.onPlayPauseClick} playing={this.state.playing} />
  //         {/* <PlayPauseIcon show={!this.state.playing} 
  //                         icon={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4A12 12 0 1 1 4 16 12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"/><path d="M12 23a1 1 0 0 1-.51-.14A1 1 0 0 1 11 22V10a1 1 0 0 1 .49-.86 1 1 0 0 1 1 0l11 6a1 1 0 0 1 0 1.76l-11 6a1 1 0 0 1-.49.1zm1-11.32v8.64L20.91 16z"/></svg>`}
  //                         hoverIcon={`<svg vxmlns="http://www.w3.org/2000/svg"viewBox="0 0 16 16">
  //                         ><path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm3.7 7.4l-5.5 3c-.2.1-.3.1-.5 0s-.2-.3-.2-.4V5c0-.2.1-.3.2-.4.2-.1.3-.1.5 0l5.5 3c.3.1.4.4.2.6 0 .1-.1.2-.2.2z"></path></svg>`}
  //                         />

  //         <PlayPauseIcon show={this.state.playing}
  //                         icon={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M14 10h-2v12h2V10zm6 0h-2v12h2V10z"/><path d="M16 4A12 12 0 1 1 4 16 12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2z"/></svg>`}
  //                         hoverIcon={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zM7 11H6V5h1v6zm3 0H9V5h1v6z"></path></svg>`} 
  //                         /> */}
            

        
  //     </div>
  //   );
  // }
}

export default HomepageVideo;