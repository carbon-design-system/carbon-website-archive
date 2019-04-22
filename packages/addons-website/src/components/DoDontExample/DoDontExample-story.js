import { storiesOf } from '@storybook/react';
import React from 'react';
import DoDontExample from '.';

storiesOf('Do Dont Example', module).add(
  'Do Dont Example',
  () => (
    <DoDontExample
      square
      label="Don’t use complex future tenses when simple ones will suffice."
      text="The API will be returning a promise."
    />
  ),
  {
    info: {
      text: 'Do Dont Example',
    },
  }
);
