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

import ColorBlock from './ColorBlock';

const stories = storiesOf('ColorBlock', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ColorBlock>Test</ColorBlock>;
});
