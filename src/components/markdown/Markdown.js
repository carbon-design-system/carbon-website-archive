import React from 'react';
import { Icon } from 'carbon-components-react';
import { Location } from '@reach/router';
import { Link } from 'gatsby';
import { Link20 } from '@carbon/icons-react';

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
          <h1 className="page-h1">{this.props.children}</h1>
        </div>
      </div>
    );
  }
}

export class h2 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash =
            typeof this.props.children !== 'string'
              ? undefined
              : this.props.children
                  .replace(/[:&?’‘“”'",.]/g, '')
                  .toLowerCase()
                  .split(' ')
                  .join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7 ibm--offset-lg-4">
                <h2 className="page-h2" id={hash}>
                  {hash && (
                    <Link className="anchor-link" to={`${path}#${hash}`}>
                      <Link20
                        className="anchor-link__icon"
                        aria-label="Anchor Link"
                      />
                    </Link>
                  )}
                  {this.props.children}
                </h2>
              </div>
            </div>
          );
        }}
      </Location>
    );
  }
}

export class h3 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash =
            typeof this.props.children !== 'string'
              ? undefined
              : this.props.children
                  .replace(/[:&?’‘“”'",.]/g, '')
                  .toLowerCase()
                  .split(' ')
                  .join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7 ibm--offset-lg-4">
                <h3 className="page-h3" id={hash}>
                  {hash && (
                    <Link className="anchor-link" to={`${path}#${hash}`}>
                      <Link20
                        className="anchor-link__icon"
                        aria-label="Anchor Link"
                      />
                    </Link>
                  )}
                  {this.props.children}
                </h3>
              </div>
            </div>
          );
        }}
      </Location>
    );
  }
}

export class h4 extends React.Component {
  render() {
    return (
      <Location>
        {({ location }) => {
          const hash =
            typeof this.props.children !== 'string'
              ? undefined
              : this.props.children
                  .replace(/[:&?’‘“”'",.]/g, '')
                  .toLowerCase()
                  .split(' ')
                  .join('-');
          const path = location.pathname;
          return (
            <div className="ibm--row">
              <div className="ibm--col-lg-7 ibm--offset-lg-4">
                <h4 className="page-h4" id={hash}>
                  {hash && (
                    <Link className="anchor-link" to={`${path}#${hash}`}>
                      <Link20
                        className="anchor-link__icon"
                        aria-label="Anchor Link"
                      />
                    </Link>
                  )}
                  {this.props.children}
                </h4>
              </div>
            </div>
          );
        }}
      </Location>
    );
  }
}

export class h5 extends React.Component {
  render() {
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-7 ibm--offset-lg-4">
          <h5 className="page-h5">{this.props.children}</h5>
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
        <div className="ibm--col-lg-7 ibm--col-md-6 ibm--offset-lg-4">
          <p className="page-p">{this.props.children}</p>
        </div>
      </div>
    );
  }
}
