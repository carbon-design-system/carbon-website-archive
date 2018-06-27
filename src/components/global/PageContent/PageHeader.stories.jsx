import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, color, select } from '@storybook/addon-knobs';

import PageContent from './PageContent';

const stories = storiesOf('PageContent', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  return <PageContent>Page content here</PageContent>;
});
