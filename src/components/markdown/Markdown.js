import React from 'react';
import PropTypes from 'prop-types';

export class PageIntro extends React.Component {
  render() {
    return <span className="page-intro">{this.props.children}</span>;
  }
}

export class h2 extends React.Component {
  render() {
    return <h2 className="page-h2">{this.props.children}</h2>;
  }
}

export class h3 extends React.Component {
  render() {
    return <h3 className="page-h3">{this.props.children}</h3>;
  }
}
