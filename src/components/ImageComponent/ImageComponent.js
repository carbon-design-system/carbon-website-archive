import React, { Component } from 'react';
import PropTypes from 'prop-types';
const path = require('path');

class ImageComponent extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string,
  };

  static defaultProps = {
    caption: '',
  };

  render() {
    const { src, alt, caption, children } = this.props;
    return (
      <div className="image-component">
        <img
          src={`${path.resolve(
            __dirname,
            `src/content/guidelines/accessibility/${src}`
          )}`}
          alt={alt}
        />
        <p>
          <em>{caption}</em>
        </p>
      </div>
    );
  }
}

export default ImageComponent;
