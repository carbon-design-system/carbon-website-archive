import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteSwitcher from '.';

storiesOf('Website Switcher', module).add(
  'Website Switcher',
  () => (
    <WebsiteSwitcher
      links={[
        { href: 'https://www.ibm.com/design/language/', linkText: 'IBM Design Language' },
        { href: 'https://www.ibm.com/standards/web/', linkText: 'IBM Digital Design' },
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
