import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle = {
  padding: '1rem',
  border: '1px solid #222',
  borderRadius: '5px',
};

const counterStyle = {
  padding: '1rem',
};

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  decrement = () => {
    this.setState(state => ({
      counter: state.counter - 1,
    }));
  };

  increment = () => {
    this.setState(state => ({
      counter: state.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <p style={{ textAlign: 'center' }}>
        This is a test
        <button style={buttonStyle} onClick={this.decrement}>
          -1
        </button>
        <span style={counterStyle}>{counter}</span>
        <button style={buttonStyle} onClick={this.increment}>
          +1
        </button>
      </p>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));