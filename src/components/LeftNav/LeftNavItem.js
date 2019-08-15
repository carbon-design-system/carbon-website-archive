import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';
import { Awake16 } from '@carbon/icons-react';

export default class LeftNavItem extends React.Component {
  static propTypes = {
    /**
     * The data structure for the nav item.
     */
    item: PropTypes.shape({
      title: PropTypes.string,
    }),

    /**
     * The key of the nav item.
     */
    itemSlug: PropTypes.string,

    /**
     * The location object.
     */
    location: PropTypes.object,
  };

  state = {
    open: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { location, itemSlug } = props;
    const { open, prevLocation, prevItemSlug } = state;
    return prevLocation === location && prevItemSlug === itemSlug
      ? null
      : {
          open:
            open ||
            (location && itemSlug && locationContainsPath(location, itemSlug)),
          prevLocation: location,
          prevItemSlug: itemSlug,
        };
  }

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = (subItems, location, itemSlug) => {
    return Object.keys(subItems).map(item => {
      const { GATSBY_CARBON_ENV } = process.env;
      const hideInternal =
        GATSBY_CARBON_ENV !== 'internal' && subItems[item].internal;
      // Check that the itemSlug (top most nav item w/ chidlren) matches the
      // zeroeth indexed normalized path array item. This is so we avoid conflicting
      // children with similar names but disimilar parents.
      const isNavItemActive = locationContainsPath(location, [itemSlug, item]);

      const navItemProps = {
        href: 'javascript:void(0)',
        element: Link,
        to: `/${this.props.itemSlug}/${item}`,
        key: item,
      };

      if (isNavItemActive) {
        navItemProps['aria-current'] = 'page';
      }

      if (hideInternal) {
        return '';
      }

      return (
        <SideNavMenuItem {...navItemProps}>
          {subItems[item].title}
        </SideNavMenuItem>
      );
    });
  };

  render() {
    const { item, itemSlug, location, isCurrentCategory } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);
    const isOpen = locationContainsPath(location, itemSlug);

    const menuItemProps = {
      icon: <Awake16 />,
      title: item.title,
      isActive: isCurrentCategory,
    };

    if (isOpen) {
      menuItemProps['defaultExpanded'] = true;
    }

    return (
      <>
        {hasSubNav ? (
          <SideNavMenu {...menuItemProps}>
            {this.renderSubNavItems(item['sub-nav'], location, itemSlug)}
          </SideNavMenu>
        ) : (
          <SideNavLink
            icon={<Awake16 />}
            href="javascript:void(0)"
            to={`/${itemSlug}`}
            element={Link}>
            {item.title}
          </SideNavLink>
        )}
      </>
    );
  }
}

/**
 * Normalize the location object provided to us through @reach/router. We also
 * make sure to clean the __PATH_PREFIX__ defined in gatsby-config.js so that
 * we can work with our paths as if they did not have that prefix. This is
 * useful for asserting locations in the pathname for our nav sub-items
 * @param {string|string[]} path The path(s).
 * @returns {string[]} The path tokens, with empty ones filtered out.
 */
function normalizePath(path) {
  const paths = Array.isArray(path) ? path : [path];
  return paths.reduce(
    (a, item) => [
      ...a,
      ...item
        .replace(__PATH_PREFIX__, '')
        .split('/')
        .filter(Boolean),
    ],
    []
  );
}

/**
 * Helper to determine if the location from @reach/router has the given path
 * @param {Object} location The location object.
 * @param {string|string[]} path The path(s).
 * @returns {boolean} `true` if the location from @reach/router has the given path(s).
 */
function locationContainsPath(location, path) {
  const paths = normalizePath(path);
  const locationParts = normalizePath(location.pathname);
  return paths.every((path, i) => path === locationParts[i]);
}
