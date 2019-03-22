import { storiesOf } from '@storybook/react';
import React from 'react';
import StickyContainer from './StickyContainer';

storiesOf('Sticky Container', module)
  .add(
    'Sticky Container no navBar',
    () => (
      <div>
        <StickyContainer navBar={false}>
          <h1>This is a sticky title header, no navbar</h1>
        </StickyContainer>
        <div
          style={{ width: '100%', height: '3000px', position: 'relative' }}
        />
      </div>
    ),
    {
      info: {
        text: 'Sticky Container',
      },
    }
  )
  .add(
    'Sticky Container with navBar',
    () => (
      <div>
        <div
          style={{
            width: '100%',
            height: '3rem',
            backgroundColor: '#333',
            position: 'sticky',
            top: '0',
            color: '#FFF',
          }}>
          this is navBar
        </div>
        <div style={{ width: '100%', height: '5rem' }} />
        <StickyContainer navBar={true}>
          <h1>This is a sticky title header</h1>
        </StickyContainer>
        <div
          style={{ width: '100%', height: '3000px', position: 'relative' }}
        />
      </div>
    ),
    {
      info: {
        text: 'Sticky Container',
      },
    }
  )
  .add(
    'Sticky Container with banner',
    () => (
      <div>
        <div
          style={{
            width: '100%',
            height: '2.5rem',
            backgroundColor: '#333',
            position: 'sticky',
            top: '0',
            color: '#FFF',
          }}>
          this is banner
        </div>
        <div style={{ width: '100%', height: '5rem' }} />
        <StickyContainer banner={true}>
          <h1>This is a sticky title header</h1>
        </StickyContainer>
        <div
          style={{ width: '100%', height: '3000px', position: 'relative' }}
        />
      </div>
    ),
    {
      info: {
        text: 'Sticky Container',
      },
    }
  )
  .add(
    'Sticky Container with navBar and banner',
    () => (
      <div>
        <div
          style={{
            width: '100%',
            height: '2.5rem',
            backgroundColor: '#666',
            position: 'sticky',
            top: '0',
            color: '#FFF',
          }}>
          this is banner
        </div>
        <div
          style={{
            width: '100%',
            height: '3rem',
            backgroundColor: '#333',
            position: 'sticky',
            top: '2.5rem',
            color: '#FFF',
          }}>
          this is navBar
        </div>
        <div style={{ width: '100%', height: '5rem' }} />
        <StickyContainer navBar={true} banner={true}>
          <h1>This is a sticky title header</h1>
        </StickyContainer>
        <div
          style={{ width: '100%', height: '3000px', position: 'relative' }}
        />
      </div>
    ),
    {
      info: {
        text: 'Sticky Container',
      },
    }
  );
