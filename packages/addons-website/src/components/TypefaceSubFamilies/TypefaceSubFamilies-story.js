import { storiesOf } from '@storybook/react';
import React from 'react';
import TypefaceSubFamilies from './TypefaceSubFamilies';

storiesOf('Typeface SubFamilies', module).add(
  'Typeface SubFamilies',
  () => <TypefaceSubFamilies />,
  {
    info: {
      text: 'Typeface SubFamilies',
    },
  }
);
