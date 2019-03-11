import { storiesOf } from '@storybook/react';
import React from 'react';
import ImageZoomModal from './ImageZoomModal';

storiesOf('Image Zoom Modal', module).add(
  'Image Zoom Modal',
  () => <ImageZoomModal caption="This is a caption" >
            <img src="https://loremflickr.com/400/300" alt="alt text" title="This is the title" alt="alt text" />
        </ImageZoomModal>,
  {
    info: {
      text: 'Image Zoom Modal',
    },
  }
);
