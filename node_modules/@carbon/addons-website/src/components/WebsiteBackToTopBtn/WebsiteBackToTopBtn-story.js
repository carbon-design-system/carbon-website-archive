import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteBackToTopBtn from '.';

storiesOf('Website Back to top button', module).add(
  'Website back to top button',
  () => <WebsiteBackToTopBtn />,
  {
    info: {
      text: 'Website back to top button',
    },
  }
);
