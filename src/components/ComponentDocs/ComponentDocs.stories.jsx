import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import ComponentDocs from './ComponentDocs';

const stories = storiesOf('ComponentDocs', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <ComponentDocs>Test</ComponentDocs>;
});
