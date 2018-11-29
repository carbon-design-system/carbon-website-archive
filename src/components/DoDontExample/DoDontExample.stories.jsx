import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  color,
  select,
} from '@storybook/addon-knobs';

import DoDontExample from './DoDontExample';

const stories = storiesOf('DoDontExample', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <DoDontExample>Test</DoDontExample>;
});
