import React from 'react';
import PropTypes from 'prop-types';

export default class PageTable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;
    return <table className="page-table">{children}</table>;
  }
}
