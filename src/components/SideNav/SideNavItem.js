import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Icon } from 'carbon-components-react';

export default class SideNavItem extends React.Component {
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
      // Check that the itemSlug (top most nav item w/ chidlren) matches the
      // zeroeth indexed normalized path array item. This is so we avoid conflicting
      // children with similar names but disimilar parents.
      const isNavItemActive = locationContainsPath(location, [itemSlug, item]);

      // If the users selects a route within a dropdown we style the "active" nav
      // item accordingly
      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': isNavItemActive,
      });

      const { GATSBY_CARBON_ENV } = process.env;
      const hideInternal =
        GATSBY_CARBON_ENV !== 'internal' && subItems[item].internal;

      if (hideInternal) {
        return '';
      }

      const tabIndex = this.state.open;

      return (
        <li role="menuitem" tabIndex="-1" className={subNavClasses} key={item}>
          <Link
            activeClassName="side-nav__sub-nav-item--active"
            to={`/${this.props.itemSlug}/${item}`}
            tabIndex={tabIndex ? 0 : -1}> 
            {subItems[item].title}
          </Link>
        </li>
      );
    });
  };

  render() {
    const { item, itemSlug, location } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);

    const navItemClasses = classnames('side-nav__nav-item', {
      'side-nav__nav-item--open': this.state.open,
      'side-nav__nav-item--active':
        locationContainsPath(location, itemSlug) && !hasSubNav,
    });

    return (
      <li role="menuitem" tabIndex="-1" className={navItemClasses}>
        {hasSubNav ? (
          // eslint-disable-next-line
          <button tabIndex="0" onClick={this.toggleSubNav}>
            {item.title}{' '}
            <Icon
              className="side-nav__nav-item--arrow"
              name="chevron--down"
              aria-hidden="true"
              description="Menu chevron icon"
              alt="Menu chevron icon"
            />
          </button>
        ) : (
          <Link to={`/${itemSlug}`}>{item.title}</Link>
        )}
        {hasSubNav && (
          <ul role="menu" aria-hidden="true" className="side-nav__sub-nav">
            {this.renderSubNavItems(item['sub-nav'], location, itemSlug)}
          </ul>
        )}
      </li>
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
  return paths.reduce((a, item) => [
    ...a,
    ...item.replace(__PATH_PREFIX__, '')
      .split('/')
      .filter(Boolean),
  ], []);
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
