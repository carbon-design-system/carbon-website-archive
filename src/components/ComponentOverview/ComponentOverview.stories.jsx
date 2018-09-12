import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import ComponentOverview from './ComponentOverview';

const stories = storiesOf('ComponentOverview', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ComponentOverview>Test</ComponentOverview>;
});
