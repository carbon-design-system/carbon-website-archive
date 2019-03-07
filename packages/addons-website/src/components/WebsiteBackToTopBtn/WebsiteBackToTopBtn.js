import React from 'react';
import { settings } from 'carbon-components';
import { UpToTop20 } from '@carbon/icons-react';
import ScrollToTop from 'react-scroll-up';

const { prefix } = settings;

const WebsiteBackToTopBtn = () => {
  return (
    <ScrollToTop showUnder={300} style={{ zIndex: 9999 }}>
      <button className={`${prefix}--back-to-top`} aria-label="Back to Top">
        <UpToTop20 />
      </button>
    </ScrollToTop>
  );
};

export default WebsiteBackToTopBtn;
