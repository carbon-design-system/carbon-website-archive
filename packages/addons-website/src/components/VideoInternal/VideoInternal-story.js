import { storiesOf } from '@storybook/react';
import React from 'react';
import VideoInternal from '.';

storiesOf('Video Internal', module).add(
  'Video Internal',
  () => (
    <div style={{width: '100%', position: 'relative'}}>
      <VideoInternal  poster="images/hero-video-poster.jpg"
                      src="videos/hero-video.mp4"
                      loop={true} />

    </div>
  ),
  {
    info: {
      text: 'Video Internal',
    },
  }
);
