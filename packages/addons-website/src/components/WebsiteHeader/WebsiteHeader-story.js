import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

import {
  SkipToContent,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  SideNav,
  SideNavMenu,
  SideNavLink,
  SideNavMenuItem,
  SideNavItems,
} from 'carbon-components-react/lib/components/UIShell';

storiesOf('Website Header', module)
  .add(
    'Website Header',
    () => (
      <>
        <Header className="bx--header--website">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={action('Menu clicked')}
          />
          <HeaderName href="#" prefix="IBM">
            Website
          </HeaderName>
        </Header>
      </>
    ),
    {
      info: {
        text: 'Website Header',
      },
    }
  )
  .add(
    'Website Header with Nav',
    () => (
      <>
        <Header className="bx--header--website">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={action('Menu clicked')}
          />
          <HeaderName href="#" prefix="IBM">
            Website
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenu aria-label="Manage">
              <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenuItem href="#" aria-current="page">
              Current
            </HeaderMenuItem>
            <HeaderMenuItem href="#">Docs</HeaderMenuItem>
            <HeaderMenuItem href="#">Support</HeaderMenuItem>
          </HeaderNavigation>
        </Header>
        <SideNav
          aria-label="Side navigation"
          className="bx--side-nav--website bx--side-nav--website--with-header-nav bx--side-nav--open">
          <SideNavItems>
            <SideNavMenu title="Manage">
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
          </SideNavItems>
        </SideNav>
      </>
    ),
    {
      info: {
        text: 'Website Header with nav',
      },
    }
  );
