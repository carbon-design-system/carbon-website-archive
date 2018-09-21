import React, { Component } from 'react';

class TypeWeightTable extends Component {
  render() {
    const typographyTable = require('../../content/guidelines/typography/_type-weight-table.md');
    return (
      <div
        className="typography-weight-table"
        dangerouslySetInnerHTML={{ __html: typographyTable }}
      />
    );
  }
}

export default TypeWeightTable;
