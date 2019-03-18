import { storiesOf } from '@storybook/react';
import React from 'react';
import PlayPauseButton from '.';

const onClick = () => {
  console.log('click')
}

storiesOf('Play Pause Button ', module).add(
  'Play Pause Button - playing',
  () => (
    <div style={{width: '100%', height: '100%', position:'relative'}}>
      <div style={{width: '20px', height: '20px'}}>
        <PlayPauseButton  playing={true}
                          onClick={onClick} />
      </div>

    </div>
  ),
  {
    info: {
      text: 'Play Pause Button - playing',
    },
  }
)
.add(
  'Play Pause Button - paused',
  () => (
    <div style={{width: '100%', height: '100%', position:'relative'}}>
      <div style={{width: '20px', height: '20px'}}>
        <PlayPauseButton  playing={false}
                          onClick={onClick} />
      </div>

    </div>
  ),
  {
    info: {
      text: 'Play Pause Button - paused',
    },
  }
);
