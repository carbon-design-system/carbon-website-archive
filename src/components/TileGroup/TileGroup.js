import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TileGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.string,
  };

  render() {
    const { children, maxWidth } = this.props;
    return (
      <div className="tile-group" style={{ maxWidth: maxWidth }}>
        {children}
      </div>
    );
  }
}
