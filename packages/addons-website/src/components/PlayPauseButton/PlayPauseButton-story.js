import { storiesOf } from '@storybook/react';
import React from 'react';
import PlayPauseButton from '.';

const onClick = () => {
  console.log('click');
};

storiesOf('Play Pause Button ', module)
  .add(
    'Play Pause Button - media playing',
    () => (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ width: '20px', height: '20px' }}>
          <PlayPauseButton playing={true} onClick={onClick} />
        </div>
      </div>
    ),
    {
      info: {
        text: 'Play Pause Button - media playing',
      },
    }
  )
  .add(
    'Play Pause Button - media paused',
    () => (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ width: '20px', height: '20px' }}>
          <PlayPauseButton playing={false} onClick={onClick} />
        </div>
      </div>
    ),
    {
      info: {
        text: 'Play Pause Button - media paused',
      },
    }
  );
