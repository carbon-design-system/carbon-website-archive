import { storiesOf } from '@storybook/react';
import React from 'react';
import Overlay from './Overlay';

storiesOf('Overlay', module).add(
  'Overlay',
  () => (
    <Overlay
      show="true"
      closeElement={
        <svg
          style={{ fill: '#FFFFFF' }}
          viewBox="0 0 32 32"
          width="32"
          height="32"
          className="bx--icons bx--icons--close">
          <path d="M17.414 16L24 9.414 22.586 8 16 14.586 9.414 8 8 9.414 14.586 16 8 22.586 9.414 24 16 17.414 22.586 24 24 22.586 17.414 16z" />
        </svg>
      }>
      <img
        src="https://loremflickr.com/400/300"
        title="This is a title"
        alt="alt text"
      />
    </Overlay>
  ),
  {
    info: {
      text: 'Overlay',
    },
  }
);
