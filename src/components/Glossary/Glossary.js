import React, { Component } from 'react';
import GlossaryList from '../GlossaryList/GlossaryList';
import GlossaryNav from '../GlossaryNav/GlossaryNav';

class Glossary extends Component {
  render() {
    const glossary = require('../../data/guidelines/glossary.js'); // eslint-disable-line
    return (
      <div className="glossary">
        <GlossaryNav />
        <GlossaryList glossary={glossary} />
      </div>
    );
  }
}

export default Glossary;
