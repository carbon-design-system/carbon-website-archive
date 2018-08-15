import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CodePage extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  };
  
  render() {
    const { 
      children 
    } = this.props;

    return (    
      <div>

        test
      </div>
    );
  }
}