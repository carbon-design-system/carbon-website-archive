import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import CodeSnippet from './CodeSnippet';

const stories = storiesOf('CodeSnippet', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <CodeSnippet>Test</CodeSnippet>;
});
