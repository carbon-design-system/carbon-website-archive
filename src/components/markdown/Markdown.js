import React from 'react';
import { Icon } from 'carbon-components-react';

export class PageIntro extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <p className="page-intro">{this.props.children}</p>
        </div>
      </div>
    );
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

export class h1 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h1 className="page-h1" id={this.props.id}>{this.props.children}</h1>
        </div>
      </div>
    );
  }
}

export class h2 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h2 className="page-h2" id={this.props.id}>     
              {this.props.children}
          </h2>
        </div>
      </div>
    );
  }
}

export class h3 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h3 className="page-h3" id={this.props.id}>{this.props.children}</h3>
        </div>
      </div>
    );
  }
}

export class h4 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h4 className="page-h4" id={this.props.id}>{this.props.children}</h4>
        </div>
      </div>
    );
  }
}

export class h5 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h5 className="page-h5" id={this.props.id}>{this.props.children}</h5>
        </div>
      </div>
    );
  }
}

export class ul extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <ul className="page-ul">{this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export class ol extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <ol className="page-ol">{this.props.children}</ol>
        </div>
      </div>
    );
  }
}

export class p extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export class DoDontGroup extends React.Component {
  render() {
    return (
      <div class="ibm--row">
        <div class="ibm--col-lg-8 ibm--offset-lg-4">
          <div className="do-dont-group">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class FlexGroup extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          <div className="page-flex-group">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export class gridWrapper extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
          {this.props.children}
        </div>
      </div>
    );
  }
}