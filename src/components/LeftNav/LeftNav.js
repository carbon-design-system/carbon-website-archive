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
import { Launch16 } from '@carbon/icons-react';

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
          isCurrentCategory={loc.pathname.includes(item) ? true : false}
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

    const { isLeftNavOpen, isLeftNavFinal } = this.props;

    const classNamesClickToClose = classnames({
      'side-nav-click-to-close': true,
      'side-nav-click-to-close__closed': !isLeftNavOpen,
      'side-nav-click-to-close__closed--final': isLeftNavFinal && !isLeftNavOpen,
    });

    return (
      <Location>
        {({ location }) => {
          const navItems = this.renderNavItems(navigation, location);

          const classNames = classnames('side-nav', {
            'side-nav__closed': !isLeftNavOpen,
            'side-nav__closed--final': isLeftNavFinal && !isLeftNavOpen,
            'side-nav--light' : location.pathname !== '/'
          });

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
                  <hr className="bx--side-nav__divider" / >
                  <SideNavLink
                    icon={<Launch16 />}
                    href="https://github.com/ibm/carbon-design-kit"
                    className="side-nav__website-link">
                    Design Kit
                  </SideNavLink>
                  <SideNavLink
                    icon={<Launch16 />}
                    href="javascript:void(0)"
                    to="/resources#github"
                    className="side-nav__website-link"
                    element={Link}>
                    Github Repos
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </>
          );
        }}
      </Location>
    );
  }
}
