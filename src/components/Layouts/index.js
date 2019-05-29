import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Packages from '../../../package.json';
import WebsiteHeader from '../WebsiteHeader';
import WebsiteAlert from '../WebsiteAlert';
import LeftNav from '../LeftNav';
import favicon32 from '../../content/global/images/favicon-32.png';
import {
  AnchorLinks,
  ImageComponent,
  Row,
  Column,
  WebsiteFooter,
  WebsiteSwitcher,
  WebsiteCodeSnippet,
  DoDontExample,
} from '@carbon/addons-website';

import '../../polyfills';
import ClickableTile from '../ClickableTile';
import FeatureTile from '../FeatureTile';
import ColorBlock from '../ColorBlock';
import ComponentCode from '../ComponentCode';
import ComponentDocs from '../ComponentDocs';
import ComponentReact from '../ComponentReact';
import WebsiteTabs from '../WebsiteTabs';
import SimpleColumns from '../SimpleColumns';
import Video from '../Video';
import PageTable from '../PageTable';

import { a, p, h1, h2, h3, h4, h5, ul, ol } from '../markdown/Markdown';

import timestamp from 'raw-loader!../../../build-timestamp';
import '../../styles/index.scss';

// import { MDXProvider } from '@mdx-js/tag';
import throttle from 'lodash.throttle';
import { MDXProvider } from '@mdx-js/react';

class Layout extends React.Component {
  constructor() {
    super();
    this.lastKnownScrollY = 0;
    this.currentScrollY = 0;
    this.stickyWrapper = null;
    this.headerHiddenClass = 'website-header-hidden';
  }

  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isLeftNavOpen: false,
    isLeftNavFinal: false,
    isSearchOpen: false,
    isSwitcherOpen: false,
    isSwitcherFinal: false,
  };

  componentDidMount() {
    this.checkWidth();
    this.addSmoothScroll();
    this.addStickyTabs();
  }

  handleSearchClick = isSearchOpen => {
    this.setState(
      {
        [isSearchOpen]: !this.state.isSearchOpen,
      },
      this.handleSearchEventListener
    );
  };

  handleSearchEventListener = () => {
    if (this.state.isSearchOpen) {
      document.body.addEventListener('click', this.handleCloseSearchClick);
    } else {
      document.body.removeEventListener('click', this.handleCloseSearchClick);
    }
  };

  handleCloseSearchClick = evt => {
    const className = evt.target.classList[0];
    const filters = [
      'bx--search',
      'bx--search-input',
      'bx--search-magnifier',
      'ds-dataset-1',
    ];
    if (filters.indexOf(className) === -1) {
      this.handleSearchClick('isSearchOpen');
    }
  };

  onToggleBtnClick = (
    clickedPanel,
    finalClickedPanel,
    closePanel,
    finalClosePanel
  ) => {
    if (this.state[clickedPanel]) {
      this.setState({
        [clickedPanel]: false,
      });
      setTimeout(() => {
        this.setState({
          [finalClickedPanel]: true,
        });
      }, 5);
    } else {
      this.setState({
        [finalClickedPanel]: false,
        [finalClosePanel]: true,
      });
      setTimeout(() => {
        this.setState({
          [clickedPanel]: true,
          [closePanel]: false,
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
        isLeftNavOpen: false,
      });
    }
  };

  clickToClose = () => {
    this.setState({
      isLeftNavOpen: false,
    });
  };

  checkWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width < 1056) {
        this.setState({
          isLeftNavOpen: false,
        });
      }

      document.addEventListener('keydown', evt => {
        if (evt.which === 27 && this.state.isLeftNavOpen) {
          this.setState({
            isLeftNavOpen: false,
          });
        }
      });
    }
  };

  addSmoothScroll = () => {
    const SmoothScroll = require('smooth-scroll');
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      offset: 87, // height of both header bars plus space for tabs
      topOnEmptyHash: false,
      clip: true,
    });

    if (window.location.hash) {
      const hashElement = document.querySelector(window.location.hash);
      if (hashElement.offsetTop) {
        window.scrollTo(0, hashElement.offsetTop);
      } else {
        // IE fallback
        scroll.animateScroll(hashElement);
      }
    }
  };

  onScroll = () => {
    // are we scrolling?
    // which direction?
    // how far away from last saved position, and which direction?
    // toggle header visible state if over max distance in particular direction

    this.currentScrollY = window.pageYOffset;
    if (this.currentScrollY < this.lastKnownScrollY - 80) {
      this.showHeader();
      this.lastKnownScrollY = this.currentScrollY;
    } else if (this.currentScrollY > this.lastKnownScrollY + 80) {
      this.hideHeader();
      this.lastKnownScrollY = this.currentScrollY;
    }
  };

  // TODO: can we componetize this to remove side effects and set the visible state in a declarative fashion
  showHeader = () => {
    if (
      this.stickyWrapper.classList &&
      this.stickyWrapper.classList.contains(this.headerHiddenClass)
    ) {
      this.stickyWrapper.classList.remove(this.headerHiddenClass);
    }
  };

  hideHeader = () => {
    this.stickyWrapper.classList.add(this.headerHiddenClass);
    if (
      this.stickyWrapper.classList &&
      !this.stickyWrapper.classList.contains(this.headerHiddenClass)
    ) {
      this.stickyWrapper.classList.remove(this.headerHiddenClass);
    }
  };

  addStickyTabs = () => {
    this.stickyWrapper = document.getElementsByTagName('body')[0];
    // save ref to body that gets the tag?
    document.addEventListener('scroll', throttle(this.onScroll, 200), false);
  };

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV === 'internal';
    const { children } = this.props;
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(Number(timestamp)));
    const { isLeftNavOpen } = this.state;

    const is404 = children.key === null;

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

            <WebsiteHeader
              isLeftNavOpen={isLeftNavOpen}
              onToggleBtnClick={this.onToggleBtnClick}
              isInternal={isInternal}
              isSearchOpen={this.state.isSearchOpen}
              handleSearchClick={this.handleSearchClick}>
              <WebsiteAlert
                alertTitle="Carbon v10 is live!"
                alertDescription="View the migration guide to upgrade from v9."
                buttonText="Migrate to v10"
                buttonTo="/updates/v10-migration/overview"
              />
            </WebsiteHeader>

            <WebsiteSwitcher
              isSwitcherFinal={this.state.isSwitcherFinal}
              isSwitcherOpen={this.state.isSwitcherOpen}
              links={[
                { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
                {
                  href: 'https://www.ibm.com/design/language/',
                  linkText: 'IBM Design Language',
                },
                {
                  href: 'https://www.carbondesignsystem.com',
                  linkText: 'IBM Product Design',
                },
                {
                  href: 'https://www.ibm.com/standards/web/',
                  linkText: 'IBM Digital Design',
                },
                {
                  href: 'https://www.ibm.com/design/research/',
                  linkText: 'IBM Design Research',
                },
                {
                  href: 'https://www.ibm.com/design/thinking/',
                  linkText: 'Enterprise Design Thinking',
                },
                {
                  href: 'https://www.ibm.com/services/ibmix/',
                  linkText: 'IBM iX',
                },
              ]}
            />

            <LeftNav
              is404Page={is404}
              isLeftNavFinal={this.state.isLeftNavFinal}
              isLeftNavOpen={this.state.isLeftNavOpen}
              location={this.props.location}
              clickToClose={this.clickToClose}
            />

            <div className="container">
              <MDXProvider
                components={{
                  // Map HTML element tag to React component
                  a: a,
                  p: p,
                  h1: h1,
                  h2: h2,
                  h3: h3,
                  h4: h4,
                  h5: h5,
                  ul: ul,
                  ol: ol,
                  pre: WebsiteCodeSnippet,
                  table: PageTable,
                  AnchorLinks,
                  ImageComponent,
                  Row,
                  Column,
                  ClickableTile,
                  FeatureTile,
                  ColorBlock,
                  ComponentCode,
                  ComponentDocs,
                  ComponentReact,
                  DoDontExample,
                  WebsiteTabs,
                  SimpleColumns,
                  Video,
                  PageTable,
                }}>
                {children}
              </MDXProvider>
              <WebsiteFooter
                logoOffset={true}
                linksCol1={[
                  { href: '/contributing/designers', linkText: 'Contribute' },
                  { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
                  {
                    href: 'https://www.ibm.com/legal',
                    linkText: 'Terms of Use',
                  },
                  { href: 'https://www.ibm.com', linkText: 'IBM.com' },
                ]}
                linksCol2={[
                  {
                    href: 'https://dribbble.com/_carbondesign',
                    linkText: 'Dribbble',
                  },
                  {
                    href: 'https://medium.com/carbondesign',
                    linkText: 'Medium',
                  },
                  {
                    href: 'https://twitter.com/_carbondesign',
                    linkText: 'Twitter',
                  },
                ]}>
                <p>
                  Have questions? Email us or open
                  <br /> an issue in{' '}
                  <a href="https://github.com/carbon-design-system/carbon-website/issues/new/choose">
                    GitHub.
                  </a>
                </p>
                <p>
                  Vanilla Components version {version}
                  <br />
                  React Components version {reactVersion}
                  <br />
                  Last updated {lastUpdated}
                  <br />
                  Copyright © {currentYear} IBM
                </p>
              </WebsiteFooter>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
