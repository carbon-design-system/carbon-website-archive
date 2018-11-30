import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Packages from '../../../package.json';
import classNames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';

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
    const lastUpdated = 'November 26, 2018';
    /*
    Halloween Icon
    const halloween = (
      <svg
        className="social-media__icon"
        width="48"
        height="32">
        <title>Halloween</title>
        <g><path d="M18.792 19.031h10.752v-2.7H18.792zM18.792 24.431h10.752v-2.7H18.792zM24.168 10.931a5.368 5.368 0 0 1 4.655 2.7h-9.31a5.368 5.368 0 0 1 4.655-2.7M24.168 29.831a5.368 5.368 0 0 1-4.655-2.7h9.31a5.368 5.368 0 0 1-4.655 2.7M24.84 7.894a2.357 2.357 0 0 0 2.352 2.362 2.357 2.357 0 0 0 2.352-2.362 2.357 2.357 0 0 0-2.352-2.363 2.357 2.357 0 0 0-2.352 2.363M23.496 7.894a2.357 2.357 0 0 1-2.352 2.362 2.357 2.357 0 0 1-2.352-2.362 2.357 2.357 0 0 1 2.352-2.363 2.357 2.357 0 0 1 2.352 2.363"/><path d="M19 11.374C15.255 9.335 14.205 6.211 15.848 2H1c4.347 2.59 5.725 6.545 4.134 11.863 4.698 1.58 7.047 4.96 7.047 10.137l5.187-3.978v-6.159c0-.706.544-1.535 1.632-2.489zM29 11.374C32.745 9.335 33.795 6.211 32.152 2H47c-4.347 2.59-5.725 6.545-4.134 11.863-4.698 1.58-7.047 4.96-7.047 10.137l-5.187-3.978v-6.159c0-.706-.544-1.535-1.632-2.489z" fill-rule="nonzero"/></g>
      </svg>
    );
    */

    const dribbble = (
      <svg
        className="social-media__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32">
        <title>Dribble</title>
        <path d="M1 16c0-2.72.67-5.23 2.01-7.53 1.34-2.3 3.16-4.12 5.46-5.46C10.77 1.67 13.28 1 16 1c2.72 0 5.23.67 7.53 2.01 2.3 1.34 4.12 3.16 5.46 5.46C30.33 10.77 31 13.28 31 16c0 2.72-.67 5.23-2.01 7.53-1.34 2.3-3.16 4.12-5.46 5.46C21.23 30.33 18.72 31 16 31c-2.72 0-5.23-.67-7.53-2.01-2.3-1.34-4.12-3.16-5.46-5.46C1.67 21.23 1 18.72 1 16zm2.49 0c0 3.12 1.05 5.87 3.15 8.25.96-1.88 2.48-3.67 4.56-5.37 2.08-1.7 4.11-2.77 6.09-3.21-.3-.7-.59-1.33-.87-1.89-3.44 1.1-7.16 1.65-11.16 1.65-.78 0-1.36-.01-1.74-.03 0 .08-.005.18-.015.3-.01.12-.015.22-.015.3zm.39-3.09c.44.04 1.09.06 1.95.06 3.34 0 6.51-.45 9.51-1.35-1.52-2.7-3.19-4.95-5.01-6.75-1.58.8-2.935 1.91-4.065 3.33-1.13 1.42-1.925 2.99-2.385 4.71zm4.47 12.96c2.26 1.76 4.81 2.64 7.65 2.64 1.48 0 2.95-.28 4.41-.84-.4-3.42-1.18-6.73-2.34-9.93-1.84.4-3.695 1.41-5.565 3.03-1.87 1.62-3.255 3.32-4.155 5.1zm4.59-21.96c1.76 1.82 3.39 4.09 4.89 6.81 2.72-1.14 4.77-2.59 6.15-4.35C21.66 4.45 19 3.49 16 3.49c-1.02 0-2.04.14-3.06.42zm5.97 8.94c.3.64.64 1.45 1.02 2.43 1.48-.14 3.09-.21 4.83-.21 1.24 0 2.47.03 3.69.09-.16-2.72-1.14-5.14-2.94-7.26-1.3 1.94-3.5 3.59-6.6 4.95zm1.77 4.53c1.02 2.96 1.71 6 2.07 9.12 1.58-1.02 2.87-2.33 3.87-3.93s1.6-3.33 1.8-5.19c-1.46-.1-2.79-.15-3.99-.15-1.1 0-2.35.05-3.75.15z" />
      </svg>
    );

    const github = (
      <svg
        className="social-media__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32">
        <title>GitHub</title>
        <g>
          <path d="M15.946 2C8.246 2 2 8.19 2 15.826c0 6.11 3.996 11.29 9.537 13.12.697.127.953-.3.953-.666 0-.33-.013-1.42-.02-2.574-3.88.836-4.698-1.63-4.698-1.63-.634-1.6-1.548-2.024-1.548-2.024-1.265-.858.095-.84.095-.84 1.4.097 2.132 1.424 2.132 1.424 1.244 2.114 3.263 1.503 4.06 1.15.124-.894.485-1.504.884-1.85-3.098-.35-6.354-1.535-6.354-6.832 0-1.51.545-2.743 1.437-3.71-.145-.35-.62-1.756.135-3.66 0 0 1.17-.372 3.834 1.417 1.112-.3 2.305-.46 3.49-.46 1.185.006 2.38.16 3.494.466 2.66-1.788 3.83-1.416 3.83-1.416.76 1.903.28 3.31.137 3.66.895.966 1.436 2.2 1.436 3.71 0 5.31-3.264 6.48-6.37 6.82.5.43.947 1.27.947 2.56 0 1.85-.015 3.34-.015 3.794 0 .368.25.8.956.663 5.538-1.83 9.53-7.01 9.53-13.117C29.894 8.19 23.646 2 15.946 2" />
          <path d="M7.223 21.695c-.03.07-.14.09-.24.042-.1-.045-.157-.138-.124-.207.03-.07.133-.09.24-.043.1.045.153.14.12.208m.684.607c-.067.06-.197.033-.286-.064-.09-.096-.108-.225-.04-.287.07-.06.194-.03.286.07.09.097.11.225.04.287m.47.776c-.086.06-.225.004-.312-.12-.085-.122-.085-.27.002-.33.087-.06.224-.004.312.118.083.126.083.273-.004.334m.796.9c-.077.082-.24.06-.36-.054-.12-.113-.155-.27-.078-.355.077-.08.24-.06.36.056.122.114.16.27.078.356m1.028.302c-.032.11-.19.16-.347.113-.158-.047-.26-.173-.23-.283.034-.11.19-.16.35-.11.16.047.26.173.23.283m1.17.13c.005.113-.13.21-.295.21-.168.003-.303-.09-.304-.2 0-.116.13-.21.298-.213.164-.002.3.09.3.203m1.15-.044c.02.11-.095.225-.26.255-.16.03-.31-.04-.33-.15-.02-.112.095-.226.256-.255.166-.03.314.04.335.15" />
        </g>
      </svg>
    );

    const medium = (
      <svg
        className="social-media__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32">
        <title>Medium</title>
        <path
          fillRule="evenodd"
          d="M29.682 8.403c-.005-.005-.01-.01-.016-.013l-.01-.005-8.637-4.257c-.06-.03-.12-.048-.188-.064-.078-.02-.157-.032-.237-.032-.33 0-.66.164-.84.45l-4.97 7.964 6.24 9.995 8.68-13.9c.027-.043.013-.1-.03-.132m-17.63 2.228V19.7l8.176 4.03-8.173-13.1m9.403 13.703l6.73 3.316c.877.43 1.587.13 1.587-.68V11.01l-8.314 13.32M2.193 4.26c-.15-.075-.295-.11-.426-.11-.37 0-.63.282-.63.754v17.952c0 .48.358 1.05.794 1.264l7.43 3.662c.19.094.378.138.54.138.46 0 .787-.352.787-.943V8.497c0-.034-.02-.066-.05-.08L2.2 4.257z"
        />
      </svg>
    );

    const twitter = (
      <svg
        className="social-media__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32">
        <title>Twitter</title>
        <g fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M27.45 10.9c0-.256 0-.51-.018-.763 1.155-.835 2.15-1.87 2.943-3.053-1.077.477-2.22.79-3.388.928 1.23-.737 2.153-1.897 2.593-3.262-1.158.687-2.424 1.17-3.745 1.43-1.83-1.943-4.734-2.42-7.087-1.16-2.353 1.26-3.57 3.94-2.965 6.54C11.04 11.324 6.62 9.084 3.626 5.4c-1.566 2.693-.766 6.14 1.826 7.872-.938-.028-1.857-.28-2.677-.738v.075c0 2.804 1.98 5.223 4.732 5.78-.868.236-1.78.27-2.663.1.773 2.403 2.987 4.05 5.51 4.096-2.088 1.642-4.668 2.533-7.325 2.53-.47 0-.94-.03-1.407-.085 2.697 1.73 5.836 2.65 9.04 2.646 10.85.005 16.784-8.984 16.784-16.778z"
          />
        </g>
      </svg>
    );

    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';
    const { isExpanded } = this.props;
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();
    const footerClasses = classNames({
      'page-footer': true,
      'page-footer--expanded': !isExpanded,
    });
    const footerLinkClasses = classNames({
      'page-footer__link': true,
      'page-footer__link--with-tooltip': true,
      'show-tooltip': this.state.copied,
    });

    return (
      <footer className={footerClasses}>
        <div className="page-footer__content">
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
            Website last updated on{' '}
            <span className="page-footer__last-updated">{lastUpdated}</span>
          </p>
          <p className="page-footer__text">Copyright © {currentYear} IBM</p>
        </div>
        <div className="page-footer__content">
          <ul className="page-footer__social-media">
            {/*  Halloween Icon
              <li>
                <button
                  className="social-media__link social-media__link--halloween"
                  aria-label="Happy Halloween from Carbon"
                  onClick={() => document.body.classList.toggle('halloween')}>
                  {halloween}
                </button>
              </li>
            */}
            <li>
              <a
                href="https://dribbble.com/_carbondesign"
                className="social-media__link"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Dribble account for Carbon">
                {dribbble}
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@_carbondesign"
                className="social-media__link"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Medium account for Carbon">
                {medium}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/_carbondesign"
                className="social-media__link"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Twitter account for Carbon">
                {twitter}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/carbon-design-system"
                className="social-media__link"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="GitHub account for Carbon">
                {github}
              </a>
            </li>
          </ul>
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
        </div>
      </footer>
    );
  }
}

export default Footer;
