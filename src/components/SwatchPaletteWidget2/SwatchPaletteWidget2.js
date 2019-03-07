import React, { Component } from 'react';

import SwatchPaletteWidget from '@carbon/addons-website/src/components/SwatchPaletteWidget';

// add '-bw' to color name to get black and white bars appearing at top and bottom of color palette
// top value sets top of sticky switcher buttons (only required if not zero)

const SwatchPaletteWidget2 = () => (
  <SwatchPaletteWidget
        top='5.5rem'
        palettes={[
          ['blue-bw', 'gray-bw', 'alert']
        ]}
      />
)


export default SwatchPaletteWidget2