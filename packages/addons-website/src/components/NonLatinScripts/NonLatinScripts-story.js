import { storiesOf } from '@storybook/react';
import React from 'react';
import NonLatinScripts from '.';

storiesOf('Non Latin Scripts', module).add(
  'Non Latin Scripts',
  () => (
    <div style={{width: '100%', backgroundColor: '#F3F3F3' }}>
      <NonLatinScripts />
    </div>
  ),
  {
    info: {
      text: 'Non Latin Scripts',
    },
  }
);
