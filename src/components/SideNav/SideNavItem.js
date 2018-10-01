import { Location } from '@reach/router';
import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import { Icon } from 'carbon-components-react';

export default class SideNavItem extends React.Component {
  state = {
    open: false,
  };

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = (subItems, location, itemSlug) => {
    // Default to an empty array so we don't run normalize on a location we
    // don't have yet when rendering the /index.
    const normalizedPathArray = location ? normalizeLocation(location) : [];

    return Object.keys(subItems).map(item => {
      // Check that the itemSlug (top most nav item w/ chidlren) matches the
      // zeroeth indexed normalized path array item. This is so we avoid conflicting
      // children with similar names but disimilar parents.
      const isNavItemActive =
        normalizedPathArray[0] === itemSlug &&
        locationContainsPathAtIndex(location, item, 1);

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

  componentDidMount = () => {
    /*
    Commenting out for now, this is breaking the build. We still need this to work though
    if (locationContainsPath(this.props.location, this.props.itemSlug) ) {
      this.setState({
        open: !this.state.open,
      });
    }
    */
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
                <button onClick={this.toggleSubNav}>
                  {item.title}{' '}
                  <Icon
                    className="side-nav__nav-item--arrow"
                    name="caret--down"
                    aria-hidden="true"
                    description="Menu arrow icon"
                    alt="Menu arrow icon"
                  />
                </button>
              ) : (
                <Link to={`/${itemSlug}`}>{item.title}</Link>
              )}
              {hasSubNav && (
                <ul className="side-nav__sub-nav">
                  {this.renderSubNavItems(item['sub-nav'], location, itemSlug)}
                </ul>
              )}
            </li>
          );
        }}
      </Location>
    );
  }
}

/**
 * Normalize the location object provided to us through @reach/router. We also
 * make sure to clean the __PATH_PREFIX__ defined in gatsby-config.js so that
 * we can work with our paths as if they did not have that prefix. This is
 * useful for asserting locations in the pathname for our nav sub-items
 */
function normalizeLocation(location) {
  return location.pathname
    .replace(__PATH_PREFIX__, '')
    .split('/')
    .filter(Boolean);
}

/**
 * Helper to determine if the location from @reach/router has the given path
 * anywhere in its pathname. Useful for top-level navigational items
 */
function locationContainsPath(location, path) {
  return normalizeLocation(location).indexOf(path) !== -1;
}

/**
 * Helper to determine if the location from @reach/router has the given path at
 * the given index.
 */
function locationContainsPathAtIndex(location, path, index) {
  // An array of the various url parts split at the '/'s
  const destructoredUrlArray = normalizeLocation(location);
  if (index < 0) {
    return destructoredUrlArray[destructoredUrlArray.length + index] === path;
  }
  return destructoredUrlArray[index] === path;
}
