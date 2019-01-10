import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Icon, Button, Loading, Link } from 'carbon-components-react';

class IconCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    viewBox: PropTypes.string,
    downloadUrl: PropTypes.string,
    svgString: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    name: '',
    height: '',
    width: '',
    viewBox: '',
    svgString: '',
    loading: false,
  };

  state = {
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

  handleFocus = () => {
    this.iconActions.classList.add('displayed');
  };

  handleBlur = () => {
    this.iconActions.classList.remove('displayed');
  };

  render() {
    const { name, height, width, viewBox, svgString, loading } = this.props;
    const downloadUrl = `../../assets/icons/${name.replace('icon--', '')}.svg`;
    return (
      <div className="icon">
        <div tabIndex={0} className="icon__card">
          {loading ? (
            <Loading withOverlay={false} small />
          ) : (
            <Icon
              name={name}
              description={name}
              height={height}
              width={width}
              viewBox={viewBox}
              tabIndex={-1}
              alt={name}
            />
          )}
          <div
            ref={iconActions => {
              this.iconActions = iconActions;
            }}
            className="icon__actions"
            onBlur={this.handleBlur}>
            <CopyToClipboard text={svgString} onCopy={this.toggleCopied}>
              <Button
                onFocus={this.handleFocus}
                tabIndex={0}
                className="icon-button">
                {this.state.displayCopied ? 'Icon Copied!' : 'Copy Icon'}
              </Button>
            </CopyToClipboard>
            <Link
              onFocus={this.handleFocus}
              tabIndex={0}
              href={downloadUrl}
              className="icon-button"
              download>
              Download
            </Link>
          </div>
        </div>
        <h5>{loading ? null : name}</h5>
        <span>{loading ? null : `#${name}`}</span>
      </div>
    );
  }
}

export default IconCard;
