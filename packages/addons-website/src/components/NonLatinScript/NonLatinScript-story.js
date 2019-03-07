import { storiesOf } from '@storybook/react';
import React from 'react';
import NonLatinScript from '.';

storiesOf('Non Latin Script', module).add(
  'Non Latin Script',
  () => (
    <NonLatinScript />
  ),
  {
    info: {
      text: 'Non Latin Script',
    },
  }
);
