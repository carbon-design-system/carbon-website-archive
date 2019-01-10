import React from 'react';
import { settings } from 'carbon-components';
import {
  Header,
} from 'carbon-components-react/lib/components/UIShell';

const { prefix } = settings;

const WebsiteHeader = ({ children }) => {
  return (
   <Header aria-label="Header" className={`${prefix}--header--website`}>
      {children}
   </Header> 
    
  );
};

export default WebsiteHeader;
