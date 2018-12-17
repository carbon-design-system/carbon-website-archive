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

import ClickTile from './ClickableTile';

storiesOf('ClickableTile', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <ClickTile>Test</ClickTile>;
  });
