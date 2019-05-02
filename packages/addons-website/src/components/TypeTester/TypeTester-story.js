import { storiesOf } from '@storybook/react';
import React from 'react';
import TypeTester from '.';

storiesOf('Type Tester', module).add(
  'Type Tester',
  () => (
    <>
      <TypeTester />
    </>
  ),
  {
    info: {
      text: 'Type Tester',
    },
  }
);
