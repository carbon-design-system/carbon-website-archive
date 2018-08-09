import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import ColorCard from './ColorCard';

const stories = storiesOf('ColorCard', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ColorCard>Test</ColorCard>;
});
