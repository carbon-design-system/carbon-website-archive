import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'gatsby-link';

import { Icon } from 'carbon-components-react';

export default class SideNavItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    open: false,
    active: false,
  };

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = subItems =>
    Object.keys(subItems).map(item => {
      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': window.location.pathname.split('/')[2] === item,
      });
      return (
        <li className={subNavClasses} key={item}>
          <Link to={`/${this.props.itemSlug}/${item}`}>{subItems[item].title}</Link>
        </li>
      );
    });

  render() {
    const { children, item, itemSlug } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);
    const navItemClasses = classnames('side-nav__nav-item', {
      'side-nav__nav-item--open': this.state.open || window.location.pathname.split('/')[1] === itemSlug,
      'side-nav__nav-item--active': window.location.pathname.split('/')[1] === itemSlug && !hasSubNav,
    });
    return (
      <li className={navItemClasses}>
        {hasSubNav ? (
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
        {hasSubNav && <ul className="side-nav__sub-nav">{this.renderSubNavItems(item['sub-nav'])}</ul>}
      </li>
    );
  }
}
