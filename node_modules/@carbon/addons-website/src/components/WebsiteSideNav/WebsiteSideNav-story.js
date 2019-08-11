import { storiesOf } from '@storybook/react';
import React from 'react';
import { Launch16 } from '@carbon/icons-react';

import {
  SideNav,
  SideNavMenu,
  SideNavLink,
  SideNavMenuItem,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

storiesOf('Website side nav', module)
  .add(
    'Website side nav dark',
    () => (
      <>
        <SideNav aria-label="Side navigation" className="bx--side-nav--website">
          <SideNavItems>
            <SideNavMenu title="Section header">
              <SideNavMenuItem href="#" aria-current="page">
                Link 1
              </SideNavMenuItem>
              <SideNavMenuItem href="#">Link 2</SideNavMenuItem>
              <SideNavMenuItem href="#">Link 3</SideNavMenuItem>
            </SideNavMenu>

            <SideNavLink href="#" aria-current="page">
              Current
            </SideNavLink>
            <SideNavLink href="#">Docs</SideNavLink>
            <SideNavLink href="#">Support</SideNavLink>
            <hr className="bx--side-nav__divider" />
            <SideNavLink
              icon={<Launch16 />}
              href="javascript:void(0)"
              className="bx--side-nav--website-link">
              External Link
            </SideNavLink>
            <SideNavLink
              icon={<Launch16 />}
              href="javascript:void(0)"
              to="/resources#github"
              className="bx--side-nav--website-link">
              External Link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    ),
    {
      info: {
        text: 'Website side nav',
      },
    }
  )
  .add(
    'Website side nav light',
    () => (
      <>
        <SideNav
          aria-label="Side navigation"
          className="bx--side-nav--website bx--side-nav--website--light">
          <SideNavItems>
            <SideNavMenu title="Section header">
              <SideNavMenuItem href="#" aria-current="page">
                Link 1
              </SideNavMenuItem>
              <SideNavMenuItem href="#">Link 2</SideNavMenuItem>
              <SideNavMenuItem href="#">Link 3</SideNavMenuItem>
            </SideNavMenu>

            <SideNavLink href="#" aria-current="page">
              Current
            </SideNavLink>
            <SideNavLink href="#">Docs</SideNavLink>
            <SideNavLink href="#">Support</SideNavLink>
            <hr className="bx--side-nav__divider" />
            <SideNavLink
              icon={<Launch16 />}
              href="javascript:void(0)"
              className="bx--side-nav--website-link">
              External Link
            </SideNavLink>
            <SideNavLink
              icon={<Launch16 />}
              href="javascript:void(0)"
              to="/resources#github"
              className="bx--side-nav--website-link">
              External Link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    ),
    {
      info: {
        text: 'Website side nav light',
      },
    }
  );
