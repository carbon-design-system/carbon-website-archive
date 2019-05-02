import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteCodeSnippet from '.';

storiesOf('Website code snippet', module).add(
  'Website code snippet',
  /* eslint-disable no-irregular-whitespace */
  () => (
    <>
      <WebsiteCodeSnippet>
        $ npm install --save carbon-components
      </WebsiteCodeSnippet>

      <WebsiteCodeSnippet>
        <pre>{`carbon-components/
├── html
├── css
│   ├── carbon-components.css
│   └── carbon-components.min.css
├── scripts
│   ├── carbon-components.js
│   └── carbon-components.min.js
├── scss
│   └── components
│       └── modal
│           └── _modal.scss
├── umd
│   └── index.js
├── es
│   └── index.js
└── src (Deprecated and subject to breaking changes, please use es/umd instead)`}</pre>
      </WebsiteCodeSnippet>
    </>
  ),
  /* eslint-enable no-irregular-whitespace */
  {
    info: {
      text: 'Website code snippet',
    },
  }
);
