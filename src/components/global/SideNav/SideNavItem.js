import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Icon } from 'carbon-components-react';

export default class SideNavItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    open: false,
  };

  toggleSubNav = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  renderSubNavItems = subItems =>
    Object.keys(subItems).map(item => {
      return (
        <li className="side-nav__sub-nav-item" key={item}>
          <a>{subItems[item].title}</a>
        </li>
      );
    });

  render() {
    const { children, item } = this.props;
    const hasSubNav = !(item['sub-nav'] === undefined);
    const navItemClasses = classnames('side-nav__nav-item', {
      'side-nav__nav-item--open': this.state.open,
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
          <a>{item.title}</a>
        )}
        {hasSubNav && <ul className="side-nav__sub-nav">{this.renderSubNavItems(item['sub-nav'])}</ul>}
      </li>
    );
  }
}
