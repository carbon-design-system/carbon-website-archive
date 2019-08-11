import { storiesOf } from '@storybook/react';
import React from 'react';
import SwatchPaletteWidget from '.';

// add '-bw' to color to get black and white bars at top and bottom
// top value sets top of sticky switcher buttons (only required if not zero)

storiesOf('Swatch Palette Widget', module).add(
  'Swatch Palette Widget',
  () => (
    <>
      <SwatchPaletteWidget
        top="0"
        palettes={[
          ['red', 'magenta', 'purple', 'blue', 'cyan', 'teal', 'green'],
          ['cool gray-bw', 'gray-bw', 'warm gray-bw'],
        ]}
      />
      <SwatchPaletteWidget palettes={[['blue-bw', 'gray-bw', 'alert']]} />
    </>
  ),
  {
    info: {
      text: 'Swatch Palette Widget',
    },
  }
);
