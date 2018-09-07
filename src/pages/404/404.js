import React from 'react';

const jackalope = require('../../content/404/images/jackalope.svg');

class NotFoundPage extends React.Component {
  render() {
    return (
      <main id="maincontent">
        <div className="fourohfour-container">
          <div className="fourohfour-large">
            <img alt="404 jackalope" src={jackalope} />
          </div>

          <div className="fourohfour-caption">
            <p className="fourohfour-title">
              Congratulations! You found the illusive jackalope!
            </p>
            <p className="fourohfour-sub">
              Unfortunately, we couldn't find the page you were looking for.
              Here are some helpful links instead:{' '}
              <a href="/components">Components</a>,{' '}
              <a href="/resources">Resources</a>
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default NotFoundPage;
