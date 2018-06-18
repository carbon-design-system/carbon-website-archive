import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import PageHeader from './PageHeader';

const stories = storiesOf('PageHeader', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const label = text('label', 'Label');
  const title = text('title', 'Component');
  return <PageHeader label={`${label}`} title={`${title}`} />;
});
