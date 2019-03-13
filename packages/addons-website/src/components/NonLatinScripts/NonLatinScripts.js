import React from 'react'
import { settings } from 'carbon-components';
import NonLatinScript from './NonLatinScript'

const { prefix } = settings;


const NonLatinScripts = () => {
  return (
    <div className={`${prefix}--non-latin-outer-spacing`}>
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
      <NonLatinScript
        typefaceName="IBM Plex Arabic"
        className="ibm-type-arabic"
        value="هذا عرض جديد"
        />
    </div>
  )
}

export default NonLatinScripts
