import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import classnames from 'classnames';
import SideNav from '../SideNav';
import SideNavToggleBtn from '../SideNavToggleBtn';
import Footer from '../Footer';
import favicon32 from '../../content/global/images/favicon-32.png';

import '../../styles/index.scss';
import '../../styles/experimental.scss';
//import '../../styles/halloween-components.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isOpen: true,
    isFinal: false,
  };

  componentDidMount() {
    this.checkWidth();
  }

  onToggleBtnClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
      setTimeout(() => {
        this.setState({
          isFinal: true,
        });
      }, 5);
    } else {
      this.setState({
        isFinal: false,
      });
      setTimeout(() => {
        this.setState({
          isOpen: true,
        });
      }, 5);
    }
  };

  handleClose = evt => {
    let isTarget = false;
    // `<svg>` in IE11 does not have `.classList`
    if (
      evt.target.classList &&
      evt.target.classList.contains('main-nav-item__heading') &&
      evt.target.classList.contains('main-nav-item__list')
    ) {
      isTarget = true;
    }
    const isSmallerScreen = window.innerWidth < 1024 || screen.width < 1024;
    if (!isTarget && isSmallerScreen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  clickToClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  checkWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width < 1024) {
        this.setState({
          isOpen: false,
        });
      }

      document.addEventListener('keydown', evt => {
        if (evt.which === 27 && this.state.isOpen) {
          this.setState({
            isOpen: false,
          });
        }
      });
    }
  };

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';
    const { children } = this.props;
    const classNames = classnames('container', {
      'container--expanded': !this.state.isOpen,
    });

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                titleInternal
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={
                isInternal
                  ? data.site.siteMetadata.titleInternal
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: 'description',
                  content:
                    'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
                },
                {
                  name: 'keywords',
                  content:
                    'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`,
                },
              ]}>
              <html lang="en" />
            </Helmet>

            <div className="website-alert">
              <p className="website-alert__text">
                Carbon X has arrived! Check out the v10 beta site and all-new
                carbon-components library.
              </p>
              <a href="https://next.carbondesignsystem.com">
                <button
                  class="bx--btn bx--btn--secondary bx--btn--sm"
                  type="button">
                  Go to V10-beta
                </button>
              </a>
            </div>
            <SideNavToggleBtn
              onToggleBtnClick={this.onToggleBtnClick}
              isOpen={this.state.isOpen}
            />
            <SideNav
              isFinal={this.state.isFinal}
              isOpen={this.state.isOpen}
              location={this.props.location}
              clickToClose={this.clickToClose}
            />
            <div className={classNames}>
              {/* <div class="bx--legacy-notification" role="alert">
                <div class="bx--notification-inline__details">
                  <div class="bx--notification-inline__text">
                    <p class="bx--notification-inline__subtitle">
                      <strong>Announcement:</strong> Carbon Design System is now
                      on Version 10.0, therefore this site and documentation is
                      outdated. Please visit the new{' '}
                      <a href="http://www.carbondesignsystem.com">
                        Carbon Design System
                      </a>{' '}
                      to get the most up to date designs and code!{' '}
                    </p>
                  </div>
                </div>
              </div> */}
              {children}
              <Footer isExpanded={this.state.isOpen} />
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
