import React from 'react';
import PropTypes from 'prop-types';

export default class PageTable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return (
      <div class="bx--row">
        <div class="bx--col-lg-15 bx--offset-lg-1">
          <table className="page-table">{children}</table>
        </div>
      </div>
    )};
}
