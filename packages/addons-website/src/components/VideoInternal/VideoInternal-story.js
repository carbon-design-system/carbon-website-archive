import { storiesOf } from '@storybook/react';
import React from 'react';
import VideoInternal from '.';

storiesOf('Video Internal', module)
  .add(
    'Video Internal - corner play',
    () => (
      <div
        style={{
          width: '100%',
          height: '33vw',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <VideoInternal
          poster="images/hero-video-poster.jpg"
          src="videos/hero-video.mp4"
          loop={true}
          overlay={true}
          cornerPlayButton={true}
        />
      </div>
    ),
    {
      info: {
        text: 'Video Internal - corner play',
      },
    }
  )
  .add(
    'Video Internal - center play',
    () => (
      <div
        style={{
          width: '100%',
          height: '33vw',
          position: 'relative',
          overflow: 'hidden',
        }}>
        <VideoInternal
          poster="images/hero-video-poster.jpg"
          src="videos/hero-video.mp4"
          loop={false}
          overlay={false}
          cornerPlayButton={false}
        />
      </div>
    ),
    {
      info: {
        text: 'Video Internal - center play',
      },
    }
  );
