import React from 'react';
import { Link } from 'gatsby';
import { UpToTop20 } from '@carbon/icons-react';

export default class BackToTop extends React.Component {
  constructor() {
    super();
  
    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 4);
    this.setState({ intervalId: intervalId });
  }
    
  render() {
    return (
      <button className="back-to-top" onClick={ () => { this.scrollToTop(); }}>
        <UpToTop20 aria-label="Back to Top" />
      </button>
    );
  }
}




