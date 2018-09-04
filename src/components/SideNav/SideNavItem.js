import React from 'react';
import classnames from 'classnames';
import { Link } from "gatsby";
import { Icon } from 'carbon-components-react';

const getPathArray = () =>
  typeof window !== 'undefined' && window.location.pathname.split('/');

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
      const subNavClasses = classnames('side-nav__sub-nav-item', {
        'side-nav__sub-nav-item--active': getPathArray()[2] === item,
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
    const navItemClasses = classnames('side-nav__nav-item', {
      'side-nav__nav-item--open': this.state.open || getPathArray()[1] === itemSlug,
      'side-nav__nav-item--active': getPathArray()[1] === itemSlug && !hasSubNav,
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
