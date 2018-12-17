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

import FeatureTile from './FeatureTile';

storiesOf('FeatureTile', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return <FeatureTile>Test</FeatureTile>;
  });
