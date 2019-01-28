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
  };

  static defaultProps = {
    cols: '12',
  };

  render() {
    const { src, alt, caption, children, cols, bg, border } = this.props;
    const columnClasses = classnames({
      'ibm--col-lg-12 ibm--offset-lg-4': cols == '12',
      'ibm--col-lg-8 ibm--offset-lg-4': cols == '8',
      'ibm--col-lg-6 ibm--offset-lg-4': cols == '6',
      'ibm--col-lg-4 ibm--offset-lg-4': cols == '4',
    });
    const imgComponentClasses = classnames('image-component', {
      'no-caption': caption === undefined,
      white: bg === 'white',
      border: border === 'true',
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
