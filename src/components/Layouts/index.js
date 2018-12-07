import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import classnames from 'classnames';
import GlobalSearch from '../GlobalSearch';
import Footer from '../Footer';
import LeftNav from '../LeftNav';
import favicon32 from '../../content/global/images/favicon-32.png';
import { 
  Header, 
  HeaderMenuButton, 
  HeaderName, 
  SkipToContent,  
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { AppSwitcher20, Menu32 } from '@carbon/icons-react';

import '../../styles/index.scss';
import '../../styles/experimental.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isOpen: false,
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
    const isSmallerScreen = window.innerWidth < 1056 || screen.width < 1056;
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

      if (width < 1056) {
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
              title={isInternal ? data.site.siteMetadata.titleInternal : data.site.siteMetadata.title}
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
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={(this.onToggleBtnClick)}
              />
              {isInternal ? (
                <HeaderName prefix="IBM" to="/" element={Link} href="/">
                  Product Design
                </HeaderName>
              ) : (
                <HeaderName prefix="" to="/" element={Link}>
                  Carbon Design System
                </HeaderName>
              )}
              
              {/*<HeaderGlobalBar>
                {isInternal ? null : <GlobalSearch />}
                {/*<HeaderGlobalAction
                  aria-label="Switch">
                  <AppSwitcher20 />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              */}
            </Header>
           <LeftNav
              isFinal={this.state.isFinal}
              isOpen={this.state.isOpen}
              location={this.props.location}
              clickToClose={this.clickToClose}
            />

            
            <div className="container">
              {children}
              <Footer />
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
