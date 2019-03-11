import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { settings } from 'carbon-components';

import Overlay from '../Overlay'

import { Icon } from 'carbon-components-react';

const { prefix } = settings;

const MagnifierIcon = (
    <svg viewBox="0 0 32 32" width="20" height="20" class="ibm-icons ibm-icons--zoom--in"><path d="M19 13h-4V9h-2v4H9v2h4v4h2v-4h4v-2z"></path><path d="M22.448 21.034a11.018 11.018 0 1 0-1.414 1.414L28.586 30 30 28.586zM14 23a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9z"></path></svg>
);

const CloseIcon = (
    <svg viewBox="0 0 32 32" width="32" height="32" class="ibm-icons ibm-icons--close"><path d="M17.414 16L24 9.414 22.586 8 16 14.586 9.414 8 8 9.414 14.586 16 8 22.586 9.414 24 16 17.414 22.586 24 24 22.586 17.414 16z"></path></svg>
);

export default class ImageZoomModal extends React.Component {
    static propTypes = {
        children: PropTypes.element,
        /** caption (optional) */
        caption: PropTypes.string,
        /** title for the image (optional) */
        title: PropTypes.string,
        /** default to false, set to true for dark background */
        dark: PropTypes.string,
    }
    state = {
      showOverlay: false,
    }
    componentDidMount() {
        this.updateDimensions()
        window.addEventListener('resize', this.updateDimensions.bind(this))
        document.addEventListener('keydown', this.handleKeyboardEvent, false)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this))
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
    
    updateDimensions = () => {
    if (window.innerWidth > 672) {
        this.setState({ showOverlay: true }, () => {
            document.body.style.overflow = 'hidden'
        }) 
    } else {
        this.setState({ showOverlay: false }, () => {
            document.body.style.overflow = 'hidden'
        }) 
    }
    }
    handleImageClick = () => {
        if (window.innerWidth < 672) return
        this.setState({ showOverlay: true }, () => {
            document.body.style.overflow = 'hidden'
        })
    }

    handleCloseClick = () => {
        this.setState({ showOverlay: false }, () => {
            document.body.style.overflow = 'visible'
        })
    }
    render() {
        const { children, caption, title, dark} = this.props;

        const containerClasses = classnames({
            [`${prefix}--imageZoom-container`] : true,
            'ibm--col-md-4' : true,
        })

        if(this.state.showOverlay)
            return (
                <Overlay
                  show={this.state.showOverlay}
                  closeElement={
                    <div className={`${prefix}--imageZoom-close`} onClick={this.handleCloseClick}>
                       {CloseIcon}
                    </div>
                  }
                >
                  {children}
                </Overlay>
            )
        return (
            <div className={containerClasses}>
                <div className={`${prefix}--imageZoom-expandableImageContainer`}
                    onClick={this.handleImageClick} 
                >
                    <div className={`${prefix}--imageZoom-expandableImage`}>
                        {children}
                    </div>
                    <div className={`${prefix}--imageZoom-magnifier`} theme={this.context} show={this.state.showOverlay}>
                        {MagnifierIcon}
                    </div>  
                </div>
                <p className="bx--type-body-long-01" style={{ paddingTop: '0.5rem' }}>
                        {caption}
                </p>
            </div>
        );
    }
};

ImageZoomModal.propTypes = {
  /**
   * Specify an array of links
   */
};

