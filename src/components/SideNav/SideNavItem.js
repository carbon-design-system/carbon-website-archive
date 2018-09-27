import { Location } from '@reach/router';
import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Icon } from 'carbon-components-react';
import {
  locationContainsPathAtIndex,
  locationContainsPath,
  determineRoutePathIndex,
} from './sideNavHelpers';

export default class SideNavItem extends React.Component {
  state = {
    open: false,
    active: false,
  };

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = (subItems, location) => {
    return Object.keys(subItems).map(item => {
      // Whether or not a side nav "item" is activated. Only navItems that are
      // routes will ever be active.
      let isNavItemActive = locationContainsPathAtIndex(
        location,
        item,
        determineRoutePathIndex(location)
      );

      // If the users selects a route within a dropdown we style the "active" nav
      // item accordingly
      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': isNavItemActive,
      });

      return (
        <li className={subNavClasses} key={item}>
          <Link
            activeClassName="side-nav__sub-nav-item--active"
            to={`/${this.props.itemSlug}/${item}`}>
            {subItems[item].title}
          </Link>
        </li>
      );
    });
  };

  render() {
    const { item, itemSlug } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);

    return (
      <Location>
        {({ location }) => {
          const navItemClasses = classnames('side-nav__nav-item', {
            'side-nav__nav-item--open':
              this.state.open || locationContainsPath(location, itemSlug),
            'side-nav__nav-item--active':
              locationContainsPath(location, itemSlug) && !hasSubNav,
          });
          return (
            <li className={navItemClasses}>
              {hasSubNav ? (
                // eslint-disable-next-line
                <a onClick={this.toggleSubNav}>
                  {item.title}{' '}
                  <Icon
                    className="side-nav__nav-item--arrow"
                    name="caret--down"
                    aria-hidden="true"
                    description="Menu arrow icon"
                    alt="Menu arrow icon"
                  />
                </a>
              ) : (
                <Link to={`/${itemSlug}`}>{item.title}</Link>
              )}
              {hasSubNav && (
                <ul className="side-nav__sub-nav">
                  {this.renderSubNavItems(item['sub-nav'], location)}
                </ul>
              )}
            </li>
          );
        }}
      </Location>
    );
  }
}
