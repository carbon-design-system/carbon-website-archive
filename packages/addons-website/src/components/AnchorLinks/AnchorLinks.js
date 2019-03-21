import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class AnchorLinks extends React.Component {
  render() {
    const { children, small } = this.props;
    const isColumn = React.Children.toArray(children.props.children).length > 6;

    const classNames = classnames({
      'anchor-links': true,
      'anchor-links--small': small,
      'anchor-links--column': isColumn,
    });
    return <div className={classNames}>{children}</div>;
  }
}

AnchorLinks.propTypes = {
  children: PropTypes.node,
  small: PropTypes.bool,
};
