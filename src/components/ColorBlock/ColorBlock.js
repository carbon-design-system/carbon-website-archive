import React from 'react';
import PropTypes from 'prop-types';
import { runInDebugContext } from 'vm';
import classnames from 'classnames';
// import CopyToClipboard from 'react-copy-to-clipboard';
// import color from 'color';
// import ReactGA from 'react-ga';

export default class ColorBlock extends React.Component {
  static propTypes = {
    /**
     * the hex code to be passed in as a value, if undefined then the content of `<color-block>` will be read as a string hex code
     */
    hex: PropTypes.string,
    /**
     * a string of the size "name" (e.g. 's'/'m'/'l', or accept a number)
     * */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  /**
   * map string of display size to a size in px
   * (assumed to be square)
   */
  displaySize = () => {
    const sizeString = this.props.size;
    if (typeof sizeString == 'number') {
      return sizeString;
    } else if (sizeString === 'xs' || sizeString === 'XS') {
      return '12px';
    } else if (sizeString === 's' || sizeString === 'S') {
      return '24px';
    } else if (sizeString === 'm' || sizeString === 'M') {
      return '40px';
    } else if (sizeString === 'l' || sizeString === 'L') {
      return '80px';
    } else {
      return '12px';
    }
  };

  /**
   * determine if author has entered a property of "hex", or if they have only entered the hex as box content (deprecated usage)
   */
  hexString = () => {
    if (this.props.hex) {
      return this.props.hex;
    } else {
      return this.props.children;
    }
  };

  /**
   * if there is no content inside the color-block, we'll return false
   * if there *is* content inside the color-block, it will be used as the label
   */
  isLabel = () => {
    if (typeof this.props.children == 'undefined') {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const hex = this.hexString();
    const squareSize = this.displaySize();
    const showLabel = this.isLabel();

    const colorBlockClassnames = classnames({
      'color-block__color': true,
      'color-block__color--with-border': true,
      'color-block__color--with-label': showLabel,
    });
    const colorBlockStyles = {
      backgroundColor: hex,
      width: squareSize,
      height: squareSize,
    };

    return (
      <div className="color-block">
        {this.props.children}
        <span className={colorBlockClassnames} style={colorBlockStyles} />
      </div>
    );
  }
}
