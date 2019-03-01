import { storiesOf } from '@storybook/react';
import React from 'react';
import InputRange from './InputRange'

storiesOf('Input Range', module).add(
  'Input Range',
  () => (
    <InputRange>
      This is some text
    </InputRange>
  ),
  {
    info: {
      text: 'Input Range',
    },
  }
);
