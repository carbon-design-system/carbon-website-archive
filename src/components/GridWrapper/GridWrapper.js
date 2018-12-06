import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class GridWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    col: PropTypes.string,
    flex: PropTypes.bool,
  };

  render() {
    const { children, col, flex } = this.props;

    const classNames = classnames({
      'ibm--offset-lg-4': true,
      'ibm--flex': flex,
    });
    
    return (
      <div className="ibm--row">
        <div className={`ibm--col-lg-${col} ${classNames}`}>
          {children}
        </div>
      </div>
    )
  };
}