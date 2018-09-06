import React from 'react';
import classnames from 'classnames';
import { Link } from "gatsby";
import { Icon } from 'carbon-components-react';

const isBrowser = typeof window !== 'undefined';
const pathArray = isBrowser ? window.location.pathname.split('/') : [];

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

  renderSubNavItems = subItems =>
    Object.keys(subItems).map(item => {
      const isSubActive = isBrowser && pathArray[2] === item;
      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': isSubActive,
      });
      return (
        <li className={subNavClasses} key={item}>
          <Link to={`/${this.props.itemSlug}/${item}`}>{subItems[item].title}</Link>
        </li>
      );
    });

  render() {
   
    const {item, itemSlug } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);
    const isNavActive = isBrowser && pathArray[1] === itemSlug;
    const navItemClasses = classnames('side-nav__nav-item', {
      'side-nav__nav-item--open': this.state.open || isNavActive,
      'side-nav__nav-item--active': isNavActive && !hasSubNav,
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
        {hasSubNav && <ul className="side-nav__sub-nav">{this.renderSubNavItems(item['sub-nav'])}</ul>}
      </li>
    );
  }
}
