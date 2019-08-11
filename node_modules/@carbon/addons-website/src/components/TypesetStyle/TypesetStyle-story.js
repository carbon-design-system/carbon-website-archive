import { storiesOf } from '@storybook/react';
import React from 'react';
import TypesetStyle from '.';

storiesOf('Typeset Style', module)
  .add(
    'Typeset Style - Productive',
    () => (
      <div style={{ width: '100%' }}>
        <TypesetStyle
          breakpointControls={false}
          title="Productive"
          typesets="caption,label,helperText,code,body,heading,productHeading"
        />
      </div>
    ),
    {
      info: {
        text: 'Typeset Style - Productive',
      },
    }
  )
  .add(
    'Typeset Style - Expressive',
    () => (
      <div style={{ width: '100%' }}>
        <TypesetStyle
          breakpointControls={true}
          title="Expressive"
          typesets="fluidHeading,fluidParagraph,fluidQuotation,fluidDisplay"
        />
      </div>
    ),
    {
      info: {
        text: 'Typeset Style - Expressive',
      },
    }
  )
  .add(
    'Typeset Style - Productive & Expressive',
    () => (
      <div style={{ width: '100%' }}>
        <TypesetStyle
          breakpointControls={false}
          title="Productive"
          typesets="caption,label,helperText,code,body,heading,productHeading"
        />
        <TypesetStyle
          breakpointControls={true}
          title="Expressive"
          typesets="fluidHeading,fluidParagraph,fluidQuotation,fluidDisplay"
        />
      </div>
    ),
    {
      info: {
        text: 'Typeset Style - Productive & Expressive',
      },
    }
  );
