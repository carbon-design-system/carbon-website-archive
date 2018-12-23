import React, { Component } from 'react';
import './_container.scss';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <React.StrictMode>
        <div
          role="main"
          className="container"
          style={{
            padding: '3em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}>
          {story()}
        </div>
      </React.StrictMode>
    );
  }
}
