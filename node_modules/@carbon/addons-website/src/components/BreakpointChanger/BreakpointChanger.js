import React from 'react';

import TypesetStyle from '@carbon/addons-website/src/components/TypesetStyle';

const BreakpointChanger = () => (
  <>
    <TypesetStyle
      breakpointControls={false}
      title="Productive"
      typesets="caption,label,helperText,code,body,heading,productHeading"
    />
    <TypesetStyle
      breakpointControls={true}
      title="Expressive"
      typesets="fluidHeading,fluidParagraph,fluidQuotation,fluidDisplay"
    />
  </>
);

export default BreakpointChanger;
