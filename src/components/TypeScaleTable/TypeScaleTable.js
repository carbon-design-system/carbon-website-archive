import React, { Component } from 'react';

class TypeScaleTable extends Component {

  render() {
    const typographyTable = require('../../content/style/typography/_type-scale-table.md');
    return (
     <div className="typography-table" dangerouslySetInnerHTML={{ __html: typographyTable }} />
    );
  }
}

export default TypeScaleTable;
