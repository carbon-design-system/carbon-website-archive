import React from 'react';
import Layout from '../components/Layouts';
import { FourOhFour } from '@carbon/addons-website';
import { Link } from 'gatsby';

import '../polyfills';

class NotFoundPage extends React.Component {
  componentDidMount() {
    let sideNav = document.querySelector('.bx--side-nav');

    if (sideNav.classList.contains('bx--side-nav--website--light')) {
      sideNav.classList.remove('bx--side-nav--website--light');
    }
  }

  render() {
    return (
      <Layout>
        <FourOhFour>
          <div className="anchor-links anchor-links--small fourohfour-body__anchor-links">
            <ul className="page-ul">
              <li>
                <Link to="/getting-started/about-carbon" >Getting started</Link>
              </li>
              <li>
                <Link to="/components/overview">Component overview</Link>
              </li>
              <li>
                <Link to="/guidelines/iconography/library">Iconography</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </div>
        </FourOhFour>
      </Layout>
    );
  }
}

export default NotFoundPage;
