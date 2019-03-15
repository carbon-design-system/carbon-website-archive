import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteBackToTopBtn from '.';

storiesOf('Website Back to top button', module).add(
  'Website Back to top button',
  () => <WebsiteBackToTopBtn />,
  {
    info: {
      text: 'Website Back to top button',
    },
  }
);
