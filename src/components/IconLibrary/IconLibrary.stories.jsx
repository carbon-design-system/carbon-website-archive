import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import IconLibrary from './IconLibrary';

const stories = storiesOf('IconLibrary', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <IconLibrary>Test</IconLibrary>;
});
