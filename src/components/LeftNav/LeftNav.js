import React from 'react';
import { Location } from '@reach/router';
import classnames from 'classnames';
import { Link } from 'gatsby';

import LeftNavItem from './LeftNavItem';
import navigation from '../../data/navigation/navigation.json';

import { 
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell';
import { Awake16 } from '@carbon/icons-react';

export default class LeftNav extends React.Component {
  renderNavItems = (nav, loc) =>
    Object.keys(nav).map(item => {
      const { GATSBY_CARBON_ENV } = process.env;
      const hideInternal =
        GATSBY_CARBON_ENV !== 'internal' && nav[item].internal;

      if (hideInternal) {
        return '';
      }
      return (
        <LeftNavItem
          itemSlug={item}
          item={nav[item]}
          key={item}
          location={loc}
        />
      );
    });

  render() {
    const { GATSBY_CARBON_ENV } = process.env;
    const isInternal = GATSBY_CARBON_ENV == 'internal';

    const { isOpen, isFinal } = this.props;

    const classNames = classnames('side-nav', {
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    const classNamesClickToClose = classnames({
      'side-nav-click-to-close': true,
      'side-nav-click-to-close__closed': !isOpen,
      'side-nav-click-to-close__closed--final': isFinal && !isOpen,
    });

    return (
      <Location>
        {({ location }) => {
          const navItems = this.renderNavItems(navigation, location);
          return (
            <>
              <div
                className={classNamesClickToClose}
                onClick={() => {
                  this.props.clickToClose();
                }}
              />
              <SideNav aria-label="Side navigation" className={classNames}>
                <SideNavItems>
                  {navItems}
                  <SideNavLink icon={<Awake16 />} href="https://github.com/ibm/carbon-design-kit" className="side-nav__website-link">Design Kit</SideNavLink>
                  <SideNavLink icon={<Awake16 />} href="javascript:void(0)" to="/resources#github" className="side-nav__website-link" element={Link}>Github Repos</SideNavLink>
                </SideNavItems>
              </SideNav>
            </>
          );
        }}
      </Location>
    );
  }
}
