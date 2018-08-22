import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'carbon-components-react';

class App extends Component {

  render() {
    return (
      <div>
        <Button kind="primary">Primary Button</Button>
      </div>
    );
  }

  /*
  render() {
    return (
      <div>
        <Button kind="primary">Primary Button</Button>
      </div>
    );
  }
  */
}

render(<App />, document.getElementById('root'));
