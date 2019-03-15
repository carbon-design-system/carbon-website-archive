import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
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
  };

  static defaultProps = {
    cols: '12',
  };

  render() {
    const {
      caption,
      children,
      cols,
      border,
      className,
      fixed,
      bg,
    } = this.props;
    const columnClasses = classnames({
      'ibm--col-lg-12 ibm--offset-lg-4': cols == 12,
      'ibm--col-lg-8 ibm--offset-lg-4': cols == 8,
      'ibm--col-lg-6 ibm--col-md-6 ibm--offset-lg-4': cols == 6,
      'ibm--col-lg-4 ibm--offset-lg-4': cols == 4,
    });
    const imgComponentClasses = classnames('image-component', className, {
      'no-caption': caption === undefined,
      border: border === 'true',
      'transparent-bg': bg === 'none',
      'fixed-default': fixed === 'default',
      'fixed-large': fixed === 'large',
    });

    return (
      <div className="ibm--row image-component__container">
        <div className={columnClasses}>
          <div className={imgComponentClasses}>{children}</div>
        </div>
        {caption && (
          <div className="ibm--col-lg-4 ibm--col-md-4 ibm--offset-lg-4">
            <p className="image-component__caption">{caption}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ImageComponent;
