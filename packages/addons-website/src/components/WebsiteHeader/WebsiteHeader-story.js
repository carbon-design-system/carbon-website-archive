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
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { Close20 } from '@carbon/icons-react';
import WebsiteSwitcher from '../WebsiteSwitcher/WebsiteSwitcher';

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

          <HeaderGlobalBar>
            <HeaderGlobalAction
              className="bx--header__action--switcher"
              aria-label="Switch"
            >
              <Close20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        <WebsiteSwitcher
          isSwitcherOpen
          links={[
            { href: 'https://www.ibm.com/design/language/', linkText: 'IBM Design Language' },
            { href: 'https://www.ibm.com/standards/web/', linkText: 'IBM Digital Design' },
            { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' }
          ]}>
        </WebsiteSwitcher>
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
          <HeaderGlobalAction
              className="bx--header__action--switcher"
              aria-label="Switch"
            >
              <Close20 />
          </HeaderGlobalAction>
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

        <WebsiteSwitcher
          isSwitcherOpen
          links={[
            { href: 'https://www.ibm.com/design/language/', linkText: 'IBM Design Language' },
            { href: 'https://www.ibm.com/standards/web/', linkText: 'IBM Digital Design' },
            { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' }
          ]}>
        </WebsiteSwitcher>
      </>
    ),
    {
      info: {
        text: 'Website Header with nav',
      },
    }
  );
