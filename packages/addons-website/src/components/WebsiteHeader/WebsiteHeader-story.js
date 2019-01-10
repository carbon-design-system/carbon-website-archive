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
} from 'carbon-components-react/lib/components/UIShell';

storiesOf('Website Header', module).add(
  'Website Header',
  () => (
    <Header className="bx--header--website">
       <SkipToContent />
       <HeaderMenuButton
          aria-label="Open menu"
          onClick={action('Menu clicked')}
        />
        <HeaderName href="#" prefix="IBM">
          Design
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
          <HeaderMenu aria-label="Manage">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
          </HeaderMenu>
          <HeaderMenuItem href="#" aria-current="page">Current</HeaderMenuItem>
          <HeaderMenuItem href="#">Docs</HeaderMenuItem>
          <HeaderMenuItem href="#">Support</HeaderMenuItem>
        </HeaderNavigation>
    </Header>
  ),
  {
    info: {
      text: 'Website Header',
    },
  }
);
