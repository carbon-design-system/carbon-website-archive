import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import Overlay from '../Overlay'
import { Close32, ZoomIn20 } from '@carbon/icons-react';

const { prefix } = settings;

const path = require('path');

class ImageComponent extends Component {
  static propTypes = {
    caption: PropTypes.string,
    cols: PropTypes.number,
    children: PropTypes.node,
    border: PropTypes.string,
    className: PropTypes.string,
    fixed: PropTypes.string,
    bg: PropTypes.string,
    zoom: PropTypes.bool,
  };

  static defaultProps = {
    cols: '12',
    zoom: false,
  };

  state = {
    showOverlay: false,
  }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyboardEvent, false)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyboardEvent, false)
    }

    handleKeyboardEvent = e => {
        const key = e.key
        if (this.state.showOverlay && key === 'Escape') {
            this.setState({ showOverlay: false }, () => {
            document.body.style.overflow = 'visible'
            })
        }
    }

    handleImageClick = () => {
        if (this.props.zoom) {
            if (window.innerWidth < 672) return
            this.setState({ showOverlay: true }, () => {
                document.body.style.overflow = 'hidden'
            })
        }
    }

    handleCloseClick = () => {
        this.setState({ showOverlay: false }, () => {
            document.body.style.overflow = 'visible'
        })
    }

  render() {
    const {
      caption,
      children,
      cols,
      border,
      className,
      fixed,
      bg,
      zoom,
    } = this.props;
    const columnClasses = classnames({
      'ibm--col-lg-12 ibm--offset-lg-4': cols == 12,
      'ibm--col-lg-8 ibm--offset-lg-4': cols == 8,
      'ibm--col-lg-6 ibm--col-md-6 ibm--offset-lg-4': cols == 6,
      'ibm--col-lg-4 ibm--offset-lg-4': cols == 4,
    });
    const imgComponentClasses = classnames(className, {
      [`${prefix}--image-component`] : true,
      'no-caption': caption === undefined,
      border: border === 'true',
      'transparent-bg': bg === 'none',
      'fixed-default': fixed === 'default',
      'fixed-large': fixed === 'large',
      'zoom' : zoom === 'true',
    });
    const magnifierClasses = classnames({
        [`${prefix}--image-component-magnifier`]: zoom === 'true',
        [`${prefix}--image-component-magnifier-hide`]: zoom != 'true',
    });
    const imgWrapperClasses = classnames({
        [`${prefix}--image-component-wrapper-zoom`]: zoom === 'true',
    });

    if(this.state.showOverlay)
        return (
            <Overlay
            show={this.state.showOverlay}
            caption={caption}
            closeElement={
                <div className={`${prefix}--imageZoom-close`} onClick={this.handleCloseClick}>
                    <Close32 />
                </div>
            }
            >
            {children}
            </Overlay>
        )

    return (
      <div className={`${prefix}--image-component__container ibm--row`} onClick={this.handleImageClick} >
        <div className={columnClasses}>
          <div className={imgWrapperClasses}> 
            <div className={imgComponentClasses}>{children}</div>
            <div className={magnifierClasses}>
                    <ZoomIn20 />
            </div>  
          </div>
        </div>
        {caption && (
          <div className="ibm--col-lg-4 ibm--col-md-4 ibm--offset-lg-4">
            <p className={`${prefix}--image-component__caption`}>{caption}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageComponent;
