import React from 'react';
import { Link } from 'gatsby';
const jackalope = require('../../content/404/images/jackalope.svg');

class FourOhFour extends React.Component {
  render() {
    return (
      <div className="page-container fourohfour-container">
        <div className="fourohfour-large">
          <img alt="404 jackalope" src={jackalope} />
        </div>
        <div className="fourohfour-caption">
          <p className="fourohfour-title">
            Congratulations! You found the illusive jackalope!
          </p>
          <p className="fourohfour-sub">
            Unfortunately, we couldn't find the page you were looking for. Here
            are some helpful links instead:
            <Link to="/components">Components</Link>,
            <Link to="/resources">Resources</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
