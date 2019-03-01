import { storiesOf } from '@storybook/react';
import React from 'react';
import StickyContainer from './StickyContainer'

storiesOf('Sticky Container', module).add(
  'Sticky Container',
  () => (
    <div>
      <StickyContainer headerVisible={false}>
        <h1>This is a sticky title</h1>
      </StickyContainer>
      <div style={{width: '100%', height: '3000px', position:'relative'}}></div>
    </div>

  ),
  {
    info: {
      text: 'Sticky Container',
    },
  }
);
