import React from 'react';
import { settings } from 'carbon-components';
import NonLatinScript from './NonLatinScript';

const { prefix } = settings;

const NonLatinScripts = () => {
  return (
    <div className={`${prefix}--non-latin-outer-spacing`}>
      <NonLatinScript
        customStyle="--non-latin-type-example-arabic"
        typefaceName="IBM Plex Arabic"
        className={`${prefix}--type-arabic`}
        rtl
        value="البشرية"
      />
      <NonLatinScript
        customStyle="--non-latin-type-example-cyrillic"
        typefaceName="IBM Plex Mono Cyrillic"
        className={`${prefix}--type-mono`}
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
        className={`${prefix}--type-serif`}
        value="инженер"
      />
      <NonLatinScript
        customStyle="--non-latin-type-example-devanagari"
        typefaceName="IBM Plex Devanagari"
        className={`${prefix}--type-devanagari`}
        value="संज्ञानात्मक"
      />
      <NonLatinScript
        className={`${prefix}--type-greek`}
        typefaceName="IBM Plex Sans Greek"
        value="νομίζω"
      />
      <NonLatinScript
        typefaceName="IBM Plex Sans Hebrew"
        className={`${prefix}--type-hebrew`}
        rtl
        value="לחשׁוֹב"
      />
      <NonLatinScript
        customStyle="--non-latin-type-example-thai"
        typefaceName="IBM Plex Thai"
        className={`${prefix}--type-thai`}
        value="องค์ความรู้"
      />
    </div>
  );
};

export default NonLatinScripts;
