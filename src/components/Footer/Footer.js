import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Packages from '../../../package.json';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'gatsby';

class Footer extends Component {
  static propTypes = {
    isExpanded: PropTypes.bool,
  };

  state = {
    copied: false,
  };

  handleClick = () => {
    this.setState({
      copied: true,
    });
    setTimeout(() => {
      this.setState({
        copied: false,
      });
    }, 2000);
  };

  render() {
    const lastUpdated = 'November 7, 2018';
    
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();

    const footerLinkClasses = classNames({
      'page-footer__link': true,
      'page-footer__link--with-tooltip': true,
      'show-tooltip': this.state.copied,
    });

    return (
      <footer className="page-footer bx--grid">
        <div className="bx--row">
          <nav className="page-footer__nav bx--col-lg-3 bx--offset-lg-1">
            <ul>
              <li>
                <Link to="/contributing/designers">Contribute</Link>
              </li>
              <li>
                <a
                  href="https://www.ibm.com/privacy"
                  aria-label="Privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.ibm.com/legal"
                  aria-label="Privacy">
                  Terms of Use
                </a>
              </li>
            </ul>
          </nav>
          <nav className="page-footer__nav bx--col-lg-3">
            <ul>
              <li>
                <a
                  href="https://dribbble.com/_carbondesign"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Dribble account for Carbon">
                  Dribble
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@_carbondesign"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Medium account for Carbon">
                Medium
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/_carbondesign"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Twitter account for Carbon">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
          <div className="page-footer__content bx--col-lg-7 bx--offset-lg-1">
          <p className="page-footer__text">
            Have questions?
            <CopyToClipboard
              text="carbon@us.ibm.com"
              onCopy={this.toggleCopied}>
              <button
                tabIndex="0"
                className={footerLinkClasses}
                onClick={() => this.handleClick()}>
                Email us
              </button>
            </CopyToClipboard>
            or open an{' '}
            <a
              href="https://github.com/ibm/carbon-components/issues/new"
              className="page-footer__link"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Open a GitHub issue">
              issue
            </a>{' '}
            in GitHub.
          </p>
          <p
            className="page-footer__text page-footer__version-link"
            id="page-footer__version-label">
            Vanilla Components version{' '}
            <a
              className="page-footer__link"
              href="https://github.com/ibm/carbon-components/releases"
              rel="noopener noreferrer"
              target="_blank"
              aria-labelledby="page-footer__version-label page-footer__version-number"
              id="page-footer__version-number">
              {version}
            </a>
          </p>
          <p
            className="page-footer__text page-footer__version-link"
            id="page-footer__react-version-label">
            React Components version{' '}
            <a
              className="page-footer__link"
              href="https://github.com/ibm/carbon-components-react/releases"
              rel="noopener noreferrer"
              target="_blank"
              aria-labelledby="page-footer__react-version-label page-footer__react-version-number"
              id="page-footer__react-version-number">
              {reactVersion}
            </a>
          </p>
          <p className="page-footer__text">
            Last updated {' '}
            <span className="page-footer__last-updated">{lastUpdated}</span>
          </p>
          <p className="page-footer__text">Copyright © {currentYear} IBM</p>
        </div>
        </div>
        <div className="bx--row">
          <div class="bx--col-lg-15 bx--offset-lg-1">
            IBM
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
