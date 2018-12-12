import React from 'react';
import { Link } from 'gatsby';
import { UpToTop20 } from '@carbon/icons-react';

export default class BackToTop extends React.Component {
  render() {
    return (
      <button className="back-to-top">
        <UpToTop20 aria-label="Back to Top" />
      </button>
    );
  }
}