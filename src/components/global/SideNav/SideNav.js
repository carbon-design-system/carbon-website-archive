import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from 'carbon-components-react';

import SideNavItem from './SideNavItem';

import navigation from '../../../data/navigation/navigation.json';

export default class SideNav extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  renderNavItems = nav =>
    Object.keys(nav).map(item => {
      return <SideNavItem itemSlug={item} item={nav[item]} />;
    });

  render() {
    const { children, isOpen, isFinal } = this.props;
    const navItems = this.renderNavItems(navigation);

    const classNames = classnames({
      'side-nav': true,
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    return (
      <nav className={classNames}>
        <ul className="side-nav__nav-items">{navItems}</ul>
      </nav>
    );
  }
}
