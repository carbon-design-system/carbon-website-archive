import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'carbon-components-react';
import '/index.css';

class App extends React.Component {
  render() {
    return <Button kind="primary">Primary Button</Button>;
  }
}

render(<App />, document.getElementById('root'));
