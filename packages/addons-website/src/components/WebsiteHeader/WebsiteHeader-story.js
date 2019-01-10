import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteHeader from '.';

storiesOf('Website Header', module).add(
  'Website Header',
  () => (
    <WebsiteHeader>
    </WebsiteHeader>
  ),
  {
    info: {
      text: 'Website Header',
    },
  }
);
