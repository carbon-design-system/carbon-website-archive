import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import Container from './Container';

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby Link component causes error if __PATH_PREFIX__ is not defined
global.__PATH_PREFIX__ = '';

// addDecorator(checkA11y);
addDecorator(story => <Container story={story} />);
setAddon(infoAddon);

function loadStories() {
  const req = require.context('../src/components', true, /.stories.jsx$/);
  req.keys().forEach(filename => req(filename));

  const packageReq = require.context('../packages', true, /-story\.js/);
  packageReq.keys().forEach(filename => packageReq(filename));
}

configure(loadStories, module);
