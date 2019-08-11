import { storiesOf } from '@storybook/react';
import React from 'react';
import WebsiteFooter from '.';

storiesOf('Website footer', module).add(
  'Website footer',
  () => (
    <WebsiteFooter
      logoOffset={true}
      linksCol1={[
        { href: '/contributing/governance', linkText: 'Contribute' },
        { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
        { href: 'https://www.ibm.com/legal', linkText: 'Terms of Use' },
        { href: 'https://www.ibm.com', linkText: 'IBM.com' },
      ]}
      linksCol2={[
        { href: 'https://dribbble.com/_carbondesign', linkText: 'Dribbble' },
        { href: 'https://medium.com/@_carbondesign', linkText: 'Medium' },
        { href: 'https://twitter.com/_carbondesign', linkText: 'Twitter' },
      ]}>
      <p>
        Have questions? Email us or open
        <br /> an issue in
        <a href="#">GitHub.</a>
      </p>
      <p>
        Last updated January 1, 2000
        <br />
        Copyright © 2018 IBM
      </p>
    </WebsiteFooter>
  ),
  {
    info: {
      text: 'Website footer',
    },
  }
);
