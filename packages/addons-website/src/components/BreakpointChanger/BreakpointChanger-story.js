import { storiesOf } from '@storybook/react';
import React from 'react';
import BreakpointChanger from './BreakpointChanger';

storiesOf('Breakpoint Changer', module).add(
  'Breakpoint Changer',
  () => (
    <div style={{ width: '100%' }}>
      <BreakpointChanger />
    </div>
  ),
  {
    info: {
      text: 'Breakpoint Changer',
    },
  }
);
