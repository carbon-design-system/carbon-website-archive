import React from 'react';
import PropTypes from 'prop-types';
import { runInDebugContext } from 'vm';
import classnames from 'classnames';

export default class ColorBlock extends React.Component {
  static propTypes = {
    /**
     * should the hex be displayed? this will also prescribe a particular layout
     */
    showhex: PropTypes.string,
    /**
     * `size` will pre-defined names sizes ('s'/'m'/'l') or a number that represents a value in pixels
     */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  /**
   * map string of display size to a size in px, or just return the number if a number was entered (assumed to be square)
   */
  swatchSize = sizeString => {
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
      return '24px';
    }
  };

  renderHex(showhex, hex) {
    let hexLabel = '';
    if (showhex) {
      hexLabel = hex;
    }
    return hexLabel;
  }

  render() {
    const hex = this.props.children;
    const size = this.props.size;
    const showhex = this.props.showhex == 'true' || this.props.showhex == true;
    const squareSize = this.swatchSize(size);

    const colorBlockClassnames = classnames({
      'color-block__color': true,
      'color-block__color--with-label': showhex,
    });
    const colorBlockStyles = {
      backgroundColor: hex,
      width: squareSize,
      height: squareSize,
    };

    return (
      <div className="color-block">
        {this.renderHex(showhex, hex)}
        <span className={colorBlockClassnames} style={colorBlockStyles} />
      </div>
    );
  }
}
