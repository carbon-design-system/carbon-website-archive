import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import ComponentCode from './ComponentCode';

const stories = storiesOf('ComponentCode', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ComponentCode>Test</ComponentCode>;
});
