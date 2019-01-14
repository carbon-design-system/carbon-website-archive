import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import {
  SideNav,
  SideNavMenu,
  SideNavLink,
  SideNavMenuItem,
  SideNavItems
} from 'carbon-components-react/lib/components/UIShell';

storiesOf('Website SideNav', module).add(
  'Website SideNav',
  () => (
    <>
        <SideNav aria-label="Side navigation" className="bx--side-nav--website">
        <SideNavItems>
        <SideNavMenu title="Manage">
            <SideNavMenuItem href="#" aria-current="page">Link 1</SideNavMenuItem>
            <SideNavMenuItem href="#">Link 2</SideNavMenuItem>
            <SideNavMenuItem href="#">Link 3</SideNavMenuItem>
          </SideNavMenu>
          
          <SideNavLink href="#" aria-current="page">Current</SideNavLink>
          <SideNavLink href="#">Docs</SideNavLink>
          <SideNavLink href="#">Support</SideNavLink>

        </SideNavItems>
      </SideNav>
    </>
  ),
  {
    info: {
      text: 'Website SideNav',
    },
  }
);
