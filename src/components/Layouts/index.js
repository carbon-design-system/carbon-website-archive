import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Packages from '../../../package.json';
import GlobalSearch from '../GlobalSearch';
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
import { WebsiteFooter } from '@carbon/addons-website';

import Snippet from '../CodeSnippet';
import PageTable from '../PageTable';
import ClickTile from '../ClickableTile';
import FeatureTile from '../FeatureTile';
import DoDontExample from '../DoDontExample';
import ColorBlock from '../ColorBlock';
import ColorCard from '../ColorCard';
import IconLibrary from '../IconLibrary';
import TypeScaleTable from '../TypeScaleTable';
import TypeWeight from '../TypeWeight';
import TypeSpec from '../TypeSpec';
import ComponentCode from '../ComponentCode';
import ComponentDocs from '../ComponentDocs';
import ComponentStatus from '../ComponentStatus';
import ComponentReact from '../ComponentReact';
import Glossary from '../Glossary';
import ComponentOverview from '../ComponentOverview';

import { p, h1, h2, h3, h4, h5, ul, ol } from '../markdown/Markdown';

import timestamp from 'raw-loader!../../../build-timestamp';
import '../../styles/index.scss';
import '../../styles/experimental.scss';

import { MDXProvider } from '@mdx-js/tag';

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
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(Number(timestamp)));
    const { isOpen } = this.state;

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
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={this.onToggleBtnClick}
                isActive={isOpen}
              />
              {isInternal ? (
                <HeaderName prefix="IBM" to="/" element={Link} href="/">
                  Product Design System
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
              <MDXProvider
                components={{
                  // Map HTML element tag to React component
                  p: p,
                  h1: h1,
                  h2: h2,
                  h3: h3,
                  h4: h4,
                  h5: h5,
                  ul: ul,
                  ol: ol,
                  pre: Snippet,
                  table: PageTable,
                  /* switch all of these to direct react component imports
                    'grid-wrapper': GridWrapper,
                    icon: PageIcon,
                    'clickable-tile': ClickTile,
                    'feature-tile': FeatureTile,
                    'do-dont-example': DoDontExample,
                    'color-block': ColorBlock,
                    'color-card': ColorCard,
                    'icon-library': IconLibrary,
                    'type-scale-table': TypeScaleTable,
                    'type-weight': TypeWeight,
                    'type-spec': TypeSpec,
                    component: ComponentCode,
                    'component-react': ComponentReact,
                    'component-docs': ComponentDocs,
                    'component-status': ComponentStatus,
                    glossary: Glossary,
                    'component-overview': ComponentOverview,
                    'anchor-links': AnchorLinks,
                    */
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
                    href: 'https://medium.com/@_carbondesign',
                    linkText: 'Medium',
                  },
                  {
                    href: 'https://twitter.com/_carbondesign',
                    linkText: 'Twitter',
                  },
                ]}>
                <p>
                  Have questions? Email us or open an issue <br />
                  in{' '}
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
