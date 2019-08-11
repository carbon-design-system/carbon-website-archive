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
import { AppSwitcher20 } from '@carbon/icons-react';
import WebsiteSwitcher from '../WebsiteSwitcher/WebsiteSwitcher';

storiesOf('Website header', module)
  .add(
    'Website header',
    () => (
      <>
        <Header aria-label="Header" className="bx--header--website">
          <SkipToContent />
          <HeaderMenuButton
            className="bx--header__action--menu"
            aria-label="Open menu"
            onClick={action('Menu clicked')}
          />
          <HeaderName href="#" prefix="IBM">
            Website
          </HeaderName>

          <HeaderGlobalBar>
            <HeaderGlobalAction
              className="bx--header__action--switcher"
              aria-label="Switch">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </>
    ),
    {
      info: {
        text: 'Website header',
      },
    }
  )
  .add(
    'Website header with nav',
    () => (
      <>
        <Header aria-label="Header" className="bx--header--website">
          <SkipToContent />
          <HeaderMenuButton
            className="bx--header__action--menu"
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
          <HeaderGlobalBar>
            <HeaderGlobalAction
              className="bx--header__action--switcher"
              aria-label="Switch">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
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
        text: 'Website header with nav',
      },
    }
  )
  .add(
    'Website header with switcher',
    () => (
      <>
        <Header aria-label="Header" className="bx--header--website">
          <SkipToContent />
          <HeaderMenuButton
            className="bx--header__action--menu"
            aria-label="Open menu"
            onClick={action('Menu clicked')}
          />
          <HeaderName href="#" prefix="IBM">
            Website
          </HeaderName>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              className="bx--header__action--switcher"
              aria-label="Switch">
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>

        <WebsiteSwitcher
          isSwitcherOpen
          links={[
            {
              href: 'https://www.ibm.com/design/language/',
              linkText: 'IBM Design Language',
            },
            {
              href: 'https://www.ibm.com/standards/web/',
              linkText: 'IBM Digital Design',
            },
            { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
          ]}
        />
      </>
    ),
    {
      info: {
        text: 'Website header with switcher',
      },
    }
  );
