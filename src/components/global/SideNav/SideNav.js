import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class SideNav extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children, isOpen, isFinal } = this.props;

    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    return <nav className={classNames}>{children}</nav>;
  }
}
