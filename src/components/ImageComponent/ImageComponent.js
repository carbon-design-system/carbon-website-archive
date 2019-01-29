import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
const path = require('path');

class ImageComponent extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
    cols: PropTypes.string,
    children: PropTypes.node,
    bg: PropTypes.string,
    border: PropTypes.bool,
    className: PropTypes.string,
    onGrid: PropTypes.bool,
  };

  static defaultProps = {
    cols: '12',
    onGrid: true,
  };

  render() {
    const {
      src,
      alt,
      caption,
      children,
      cols,
      bg,
      border,
      className,
      onGrid,
      fixed,
    } = this.props;
    const columnClasses = classnames({
      'ibm--col-lg-12 ibm--offset-lg-4': cols == '12',
      'ibm--col-lg-8 ibm--offset-lg-4': cols == '8',
      'ibm--col-lg-6 ibm--col-md-6 ibm--offset-lg-4': cols == '6',
      'ibm--col-lg-4 ibm--offset-lg-4': cols == '4',
    });
    const imgComponentClasses = classnames('image-component', className, {
      'no-caption': caption === undefined,
      white: bg === 'white',
      border: border === 'true',
      'fixed-default': fixed === 'default',
      'fixed-large': fixed === 'large',
    });

    return (
      <div className="ibm--row">
        <div className={columnClasses}>
          <div className={imgComponentClasses}>
            {children}
            {caption && <p className="image-component__caption">{caption}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageComponent;
