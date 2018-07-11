import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Link from 'gatsby-link';
import { Button, Search, Icon } from 'carbon-components-react';

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
        <Link to="/" className="side-nav__logo">
          <span>Carbon</span> Design System
        </Link>
        <div className="side-nav__search">
          <Search small id="side-nav-search" labelText="Search" placeHolderText="Search" onChange={() => {}} />
        </div>
        <ul className="side-nav__nav-items">{navItems}</ul>
        <div className="side-nav__links">
          <Button
            className="side-nav__link"
            kind="secondary"
            icon="icon--arrow--right"
            iconDescription="Arrow right"
            href="https://github.com/ibm/carbon-design-kit"
          >
            Design Kit
          </Button>
          <Button
            className="side-nav__link"
            kind="secondary"
            icon="icon--arrow--right"
            iconDescription="Arrow right"
            href="https://github.com/ibm/carbon-components"
          >
            Vanilla Repo
          </Button>
          <Button
            className="side-nav__link"
            kind="secondary"
            icon="icon--arrow--right"
            iconDescription="Arrow right"
            href="https://github.com/ibm/carbon-components-react"
          >
            React Repo
          </Button>
        </div>
      </nav>
    );
  }
}
