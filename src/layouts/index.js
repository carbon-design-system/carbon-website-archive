import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames';
import SideNav from '../components/SideNav';
import SideNavToggleBtn from '../components/SideNavToggleBtn';
import Footer from '../components/Footer';
import favicon32 from '../content/global/images/favicon-32.png';

import '../styles/index.scss';


class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  state = {
    isOpen: true,
    isFinal: false,
  };

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
  
  render() {
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
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[{ name: 'description', content: 'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.' }, { name: 'keywords', content: 'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud' }]}
              link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon32}` }]}
            />
            <SideNavToggleBtn onToggleBtnClick={this.onToggleBtnClick} isOpen={this.state.isOpen} />
            <SideNav isFinal={this.state.isFinal} isOpen={this.state.isOpen} />
            <div className={classNames}>
              {children}
              <Footer isExpanded={this.state.isOpen} />
            </div>
                
          </>
        )}
      />
    );
  }
}

export default Layout