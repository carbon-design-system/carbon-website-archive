import { storiesOf } from '@storybook/react';
import React from 'react';
import NonLatinScript from '.';

storiesOf('Non Latin Script', module).add(
  'Non Latin Script',
  () => (
    <div style={{width: '100%', backgroundColor: '#F3F3F3' }}>
      <NonLatinScript />
    </div>
  ),
  {
    info: {
      text: 'Non Latin Script',
    },
  }
);
