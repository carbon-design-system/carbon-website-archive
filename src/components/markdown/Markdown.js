import React from 'react';
import { Icon } from 'carbon-components-react';

export class PageIntro extends React.Component {
  render() {
    return <span className="page-intro">{this.props.children}</span>;
  }
}

export class PageIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        className={`page-icon page-icon-${this.props.color}`}
      />
    );
  }
}

export class FlexGroup extends React.Component {
  render() {
    return <div className="page-flex-group">{this.props.children}</div>;
  }
}

export class h4 extends React.Component {
  render() {
    return <h4 className="page-h4">{this.props.children}</h4>;
  }
}

export class ul extends React.Component {
  render() {
    return <ul className="page-ul">{this.props.children}</ul>;
  }
}

export class ol extends React.Component {
  render() {
    return <ol className="page-ol">{this.props.children}</ol>;
  }
}
