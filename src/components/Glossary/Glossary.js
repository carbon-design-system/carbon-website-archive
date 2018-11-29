import React, { Component } from 'react';
import GlossaryList from '../GlossaryList/GlossaryList';
import GlossaryNav from '../GlossaryNav/GlossaryNav';

class Glossary extends Component {
  render() {
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    return (
      <div className="glossary">
        <GlossaryNav />
        <div className="component-variation bx--row">
          <div class="bx--col-lg-12 bx--offset-lg-4">
            <GlossaryList glossary={glossary} />
          </div>
        </div>
      </div>
    );
  }
}

export default Glossary;
