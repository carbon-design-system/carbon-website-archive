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

import TileGroup from './TileGroup';
import ClickTile from '../ClickableTile';

storiesOf('TileGroup', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <TileGroup>
        <ClickTile>Test</ClickTile>
        <ClickTile>Test</ClickTile>
        <ClickTile>Test</ClickTile>
        <ClickTile>Test</ClickTile>
      </TileGroup>
    );
  });
