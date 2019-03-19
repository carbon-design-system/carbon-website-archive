import { storiesOf } from '@storybook/react';
import React from 'react';
import HomepageVideo from '.';

storiesOf('Homepage Video', module).add(
  'Homepage Video',
  () => (
    <div style={{width: '100%', position: 'relative'}}>
      <HomepageVideo />

    </div>
  ),
  {
    info: {
      text: 'Homepage Video',
    },
  }
);
