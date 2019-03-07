import { storiesOf } from '@storybook/react';
import React from 'react';
import NonLatinScripts from '.';
import NonLatinScript from './NonLatinScript';

storiesOf('Non Latin Scripts', module).add(
  'Non Latin Scripts',
  () => (
    <div style={{width: '100%', backgroundColor: '#F3F3F3' }}>
      <NonLatinScripts />
    </div>
  ),
  {
    info: {
      text: 'Parent Component Listing Non Latin Scripts',
    },
  }
)
.add(
  'Individual Non Latin Scripts',
  () => (
    <div style={{width: '100%', backgroundColor: '#F3F3F3' }}>
      <NonLatinScript
        customStyle="--non-latin-type-example-cyrillic"
        typefaceName="IBM Plex Mono Cyrillic"
        className="ibm-type-mono"
        value="инженер"
      />
      <NonLatinScript
        customStyle="--non-latin-type-example-cyrillic"
        typefaceName="IBM Plex Sans Cyrillic"
        value="инженер"
      />
      <NonLatinScript
        customStyle="--non-latin-type-example-cyrillic"
        typefaceName="IBM Plex Serif Cyrillic"
        className="ibm-type-serif"
        value="инженер"
        />
      <NonLatinScript
        customStyle="--non-latin-type-example-devanagari"
        typefaceName="IBM Plex Devanagari"
        className="ibm-type-devanagari"
        value="संज्ञानात्मक"
      />
      <NonLatinScript
        typefaceName="IBM Plex Sans Greek"
        value="νομίζω"
        />
      <NonLatinScript
        typefaceName="IBM Plex Sans Hebrew"
        className="ibm-type-hebrew"
        rtl
        value="לחשׁוֹב"
        />
      <NonLatinScript
        customStyle="--non-latin-type-example-thai"
        typefaceName="IBM Plex Thai (non-looped)"
        className="ibm-type-thai"
        value="องค์ความรู้"
        />
    </div>
  ),
  {
    info: {
      text: 'Individual Components listed on their own',
    },
  }
);
