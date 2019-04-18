import { storiesOf } from '@storybook/react';
import React from 'react';
import Carousel from './Carousel';

storiesOf('Carousel', module)
  .add(
    'Carousel with nav',
    () => (
      <Carousel id="c1" count="1 2 3" nav={true} autoplay>
        <img
          src="https://loremflickr.com/640/480/paris"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/manhattan"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/london"
          alt="alt text"
          title="This is the title"
        />
      </Carousel>
    ),
    {
      info: {
        text: 'Carousel with nav',
      },
    }
  )
  .add(
    'Carousel no nav',
    () => (
      <Carousel id="c2" count="1 2 3 4" nav={false} autoplay>
        <img
          src="https://loremflickr.com/640/480/dog"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/cat"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/eagle"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/horse"
          alt="alt text"
          title="This is the title"
        />
      </Carousel>
    ),
    {
      info: {
        text: 'Carousel no nav',
      },
    }
  )
  .add(
    'Carousel fade',
    () => (
      <Carousel id="c3" count="1 2 3" nav={false} fade={true} autoplay>
        <img
          src="https://loremflickr.com/640/480/train"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/boat"
          alt="alt text"
          title="This is the title"
        />
        <img
          src="https://loremflickr.com/640/480/car"
          alt="alt text"
          title="This is the title"
        />
      </Carousel>
    ),
    {
      info: {
        text: 'Carousel fade',
      },
    }
  );
