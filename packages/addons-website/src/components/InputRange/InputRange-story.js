import { storiesOf } from '@storybook/react';
import React from 'react';
import InputRange from './InputRange';

class InputStory extends React.Component {
  state = {
    value: 33,
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div style={{ width: '100px' }}>
        <InputRange
          min={0}
          max={100}
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

storiesOf('Input Range', module).add('Input Range', () => <InputStory />, {
  info: {
    text: 'Input Range',
  },
});
