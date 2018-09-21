import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import color from 'color';
import classnames from 'classnames';
import ReactGA from 'react-ga';

export default class ColorCard extends React.Component {
  static propTypes = {
    hex: PropTypes.string,
    name: PropTypes.string,
    border: PropTypes.string,
    small: PropTypes.string,
  };

  state = {
    value: this.props.hex,
    displayCopied: false,
  };

  toggleCopied = () => {
    this.setState({
      displayCopied: true,
    });
    setTimeout(() => {
      this.setState({
        displayCopied: false,
      });
    }, 2500);
  };

  handleClick = () => {
    ReactGA.event({
      category: 'Copy Color',
      action: 'click',
    });
  };

  colorContrast = ColorHEX => {
    if (ColorHEX.charAt(0) === '#') {
      const ConvertedHEX = color(ColorHEX);
      return ConvertedHEX.luminosity() > 0.44
        ? 'color-block__button--dark'
        : 'color-block__button--light';
    }
    return 'color-block__button--dark';
  };

  render() {
    const { hex, border, name, small } = this.props;

    const buttonClassName = this.colorContrast(this.props.hex);

    const classNames = classnames({
      'color-block': true,
    });

    const exampleClassNames = classnames(name, {
      'color-block__example': true,
      'color-block__example--border': border,
      'color-block__example--small': small,
    });

    return (
      <div tabIndex="0" className={classNames}>
        <div
          tabIndex="0"
          className={exampleClassNames}
          style={{ backgroundColor: hex }}>
          <CopyToClipboard text={this.state.value} onCopy={this.toggleCopied}>
            <button
              tabIndex="0"
              className={buttonClassName}
              onClick={() => this.handleClick()}>
              {this.state.displayCopied ? 'HEX Copied!' : 'Copy HEX'}
            </button>
          </CopyToClipboard>
        </div>
        <p className="color-block__name">{name}</p>
        <p className="color-block__hex">{hex}</p>
      </div>
    );
  }
}
