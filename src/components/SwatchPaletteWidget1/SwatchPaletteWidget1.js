import React, { Component } from 'react';

import SwatchPaletteWidget from '@carbon/addons-website/src/components/SwatchPaletteWidget';


const SwatchPaletteWidget1 = () => (
  <SwatchPaletteWidget
        top='5.5rem'
        palettes={[
          ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green'],
          ['cool gray-bw','gray-bw','warm gray-bw']
        ]}
      />
)


export default SwatchPaletteWidget1