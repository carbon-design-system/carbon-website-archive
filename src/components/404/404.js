import React from 'react';
import { Link } from 'gatsby';
const jackalope = require('../../content/404/images/jackalope.svg');

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="page-content fourohfour">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-12 ibm--offset-lg-4">
              <h2>Something's wrong!</h2>
              <p>Sorry, we cannot find the page you are looking for.</p>
              <p>Maybe some of these most visited links will help you?</p>

              <div className="anchor-links anchor-links--small">
                <ul className="page-ul">
                  <li>
                    <Link to="/getting-started/about-carbon">Getting started</Link>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
