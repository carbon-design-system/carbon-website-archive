import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class PageTable extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    let gridSize = children[1].props.children[0].props.children.length > 3 ? 'ibm--col-lg-12' : 'ibm--col-lg-8 ibm--col-md-6';

    const classNames = classnames(gridSize, 'ibm--offset-lg-4 ibm--col-bleed')

    return (
      <div className="ibm--row">
        <div className={classNames}>
          <table className="page-table">{children}</table>
        </div>
      </div>
    );
  }
}
