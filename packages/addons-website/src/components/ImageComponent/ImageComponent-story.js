import { storiesOf } from '@storybook/react';
import React from 'react';
import ImageComponent from './ImageComponent';

storiesOf('Image Component', module)
  .add(
    'Image Component with Zoom',
    () => (
      <ImageComponent caption="This is a caption" fixed="default" zoom="true">
        <img
          src="https://loremflickr.com/400/300"
          alt="alt text"
          title="This is the title"
        />
      </ImageComponent>
    ),
    {
      info: {
        text: 'Image Component with Zoom',
      },
    }
  )
  .add(
    'Image Component with Zoom no Title',
    () => (
      <ImageComponent caption="This is a caption" fixed="default" zoom="true">
        <img src="https://loremflickr.com/400/300" alt="alt text" />
      </ImageComponent>
    ),
    {
      info: {
        text: 'Image Component with Zoom no Title',
      },
    }
  )
  .add(
    'Image Component no Zoom',
    () => (
      <ImageComponent caption="This is a caption" fixed="default">
        <img
          src="https://loremflickr.com/400/300"
          alt="alt text"
          title="This is the title"
        />
      </ImageComponent>
    ),
    {
      info: {
        text: 'Image Component no Zoom',
      },
    }
  );
