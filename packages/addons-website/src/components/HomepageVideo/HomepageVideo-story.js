import { storiesOf } from '@storybook/react';
import React from 'react';
import HomepageVideo from '.';

storiesOf('Homepage Video', module)
  .add(
    'Homepage Video - no props',
    () => (
      <div style={{ width: '100%', position: 'relative' }}>
        <HomepageVideo />
      </div>
    ),
    {
      info: {
        text: 'Homepage Video - no props',
      },
    }
  )
  .add(
    'Homepage Video - with props',
    () => (
      <div style={{ width: '100%', position: 'relative' }}>
        <HomepageVideo
          src="https://design-language-api.mybluemix.net/videos/typeface_02.mp4"
          poster="https://design-language-api.mybluemix.net/images/TypefaceSecondVideoPoster.gif"
        />
      </div>
    ),
    {
      info: {
        text: 'Homepage Video - with props',
      },
    }
  );
