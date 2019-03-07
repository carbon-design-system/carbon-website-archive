import React, { Component } from 'react';

import Widget from '@carbon/addons-website/src/components/SwatchPaletteWidget';


// add '-bw' to color name to get black and white bars appearing at top and bottom of color palette
// top value sets top of sticky switcher buttons (only required if not zero)

const SwatchPaletteWidget = ({top, palettes}) => {
  const parsedArray = []
  const pArray = palettes.split('|') 
  pArray.map (p => {
    parsedArray.push(p.split(','))
  })
  console.log('parsedArray', parsedArray)
  return (
    <Widget
        top={top}
        palettes={parsedArray}
      />
  )
}


export default SwatchPaletteWidget