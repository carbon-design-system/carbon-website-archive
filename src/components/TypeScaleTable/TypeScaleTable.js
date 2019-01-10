import React, { Component } from 'react';

class TypeScaleTable extends Component {
  render() {
    const typographyTable = require('../../content/guidelines/typography/_type-scale-table.md');
    return (
      <div className="ibm--row">
        <div className="ibm--col-lg-8 ibm--offset-lg-4 typography-table">
          <div dangerouslySetInnerHTML={{ __html: typographyTable }} />
        </div>
      </div>
    );
  }
}

export default TypeScaleTable;
