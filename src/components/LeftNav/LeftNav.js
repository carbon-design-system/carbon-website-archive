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
          isCurrentCategory={!!loc.pathname.includes(item)}
          itemSlug={item}
          item={nav[item]}
          key={item}
          location={loc}
        />
      );
    });

  render() {
    const { isLeftNavOpen, isLeftNavFinal, is404Page } = this.props;

    const classNamesClickToClose = classnames({
      'side-nav-click-to-close': true,
      'side-nav-click-to-close__closed': !isLeftNavOpen,
      'side-nav-click-to-close__closed--final':
        isLeftNavFinal && !isLeftNavOpen,
    });

    return (
      <Location>
        {({ location }) => {
          const navItems = this.renderNavItems(navigation, location);

          const classNames = classnames('side-nav', {
            'side-nav__closed': !isLeftNavOpen,
            'side-nav__closed--final': isLeftNavFinal && !isLeftNavOpen,
            'bx--side-nav--website--light':
              location.pathname !== '/' &&
              location.pathname !== '/design/product/' &&
              !is404Page,
            'bx--side-nav--website': true,
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
                  <hr className="bx--side-nav__divider" />
                  <SideNavLink
                    icon={<Launch16 />}
                    href="/resources#sketch-libraries"
                    className="bx--side-nav--website-link">
                    Design Kit
                  </SideNavLink>
                  <SideNavLink
                    icon={<Launch16 />}
                    href="javascript:void(0)"
                    to="/resources#github-repos"
                    className="bx--side-nav--website-link"
                    element={Link}>
                    GitHub repos
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
