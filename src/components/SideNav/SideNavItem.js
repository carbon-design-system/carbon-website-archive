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

  renderSubNavItems = (subItems, location) =>
    Object.keys(subItems).map(item => {
      const pathname = normalizeLocation(location);
      let isItemActive = false;

      // Support nested /components/:component/:tab
      // Support nested /guidelines/:guideline/:tab
      if (pathname.length === 3) {
        // Match :component, :guideline
        isItemActive = locationContainsPathAtIndex(location, item, -2);
      }

      // Support /components/overview
      if (pathname.length === 2) {
        isItemActive = locationContainsPathAtIndex(location, item, -1);
      }

      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': isItemActive,
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

  componentDidMount = () => {
    console.log(this.props);
  };
   


  render() {
    const { item, itemSlug } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);

    
    return (
      <Location>
        {({ location }) => {
          const navItemClasses = classnames('side-nav__nav-item', {
            'side-nav__nav-item--open': this.state.open || locationContainsPath(location, itemSlug),
            'side-nav__nav-item--active': locationContainsPath(location, itemSlug) && !hasSubNav,
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

/**
 * Helper to determine if the location from @reach/router has the given path
 * anywhere in its pathname. Useful for top-level navigational items
 */
function locationContainsPath(location, path) {
  return normalizeLocation(location).indexOf(path) !== -1;
}

/**
 * Helper to determine if the location from @reach/router has the given path at
 * the given index. Supports negative indices that represent how far to go from
 * the end of the array backwards
 */
function locationContainsPathAtIndex(location, path, index) {
  const parts = normalizeLocation(location);
  if (index < 0) {
    return parts[parts.length + index] === path;
  }
  return parts[index] === path;
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
