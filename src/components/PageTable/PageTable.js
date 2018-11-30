import React from 'react';
import PropTypes from 'prop-types';

export default class PageTable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div class="ibm--row">
        <div class="ibm--col-lg-12 ibm--offset-lg-4">
          <table className="page-table">{children}</table>
        </div>
      </div>
    )};
}
