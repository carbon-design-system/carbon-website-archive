import { storiesOf } from '@storybook/react';
import React from 'react';
import AnchorLinks from '.';

storiesOf('Anchor Links', module).add(
  'Anchor Links',
  () => (
    <AnchorLinks small={true} className="anchor-links">
      <a href="#">Small Link</a>
    </AnchorLinks>
  ),
  {
    info: {
      text: 'Anchor Links',
    },
  }
);
