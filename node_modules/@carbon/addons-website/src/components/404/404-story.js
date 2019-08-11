import { storiesOf } from '@storybook/react';
import React from 'react';
import FourOhFour from '.';

storiesOf('404', module).add(
  '404 Page',
  () => (
    <FourOhFour>
      <ul>
        <li>
          <a href="#">Support Link 1</a>
        </li>
        <li>
          <a href="#">Support Link 2</a>
        </li>
        <li>
          <a href="#">Support Link 3</a>
        </li>
      </ul>
    </FourOhFour>
  ),
  {
    info: {
      text: '404 Page',
    },
  }
);
