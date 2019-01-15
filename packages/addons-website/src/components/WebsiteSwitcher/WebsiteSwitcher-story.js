import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteSwitcher from '.';

storiesOf('Website Switcher', module).add(
  'Website Switcher',
  () => (
    <WebsiteSwitcher
      links={[
        { href: 'https://www.ibm.com/privacy', linkText: 'IBM Digital Design' },
        { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' }
      ]}>
    </WebsiteSwitcher>
  ),
  {
    info: {
      text: 'Website Switcher',
    },
  }
);
