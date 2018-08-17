import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import SideNav from '../components/SideNav';
import SideNavToggleBtn from '../components/SideNavToggleBtn';
import Footer from '../components/Footer';
import favicon32 from '../content/global/images/favicon-32.png';

import './index.scss';

const Layout = ({ children, data }) => (
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
        <SideNavToggleBtn />
        <SideNav />
        <div className="container">
          {children}
          <Footer />
        </div>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout