import React from 'react';

export default class GlobalSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.textInput.current.focus(), 0;
    });
  }

  render() {
    return <input {...this.props} ref={this.textInput} />;
  }
}
