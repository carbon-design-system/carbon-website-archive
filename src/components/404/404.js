import React from 'react';
import { Link } from 'gatsby';
const jackalope = require('../../content/404/images/jackalope.svg');

class FourOhFour extends React.Component {
  render() {
    if (typeof document !== 'undefined') {
      document.body.style.background = '#282828';
    }
    return (
      <div className="page-content fourohfour">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-12 ibm--offset-lg-4 fourohfour-body">
              <div className="fourohfour-body">
                <h2 className="fourohfour-body__heading">Something's wrong!</h2>
                <p className="fourohfour-body__text">Sorry, we cannot find the page you are looking for.</p>
                <p className="fourohfour-body__text">Maybe some of these most visited links will help you?</p>
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
                <h5 className="fourohfour-body__404">404</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
