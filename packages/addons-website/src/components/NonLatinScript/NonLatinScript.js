import React from 'react'
import classnames from 'classnames'
import RenewIcon from '@carbon/icons-react/lib/renew/20'
import { settings } from 'carbon-components';

const { prefix } = settings;

class TypefaceExampleEditable extends React.Component {
  state = {
    customValue: null,
  }

  render() {
    const {
      typefaceName,
      value,
      rtl = false,
      className,
      disabled,
      comingSoonText,
      ImageTypeSample,
      customStyle
    } = this.props

    return (
      <div className={`${prefix}--non-latin-container`}>
        <div>
          <h3 className={`${prefix}--type-body-long-01 ${prefix}--non-latin-typeface-name-heading`}>
            {typefaceName}
          </h3>
          {this.state.customValue !== null && (
            <button
              className={`${prefix}--type-body-long-01 ${prefix}--non-latin-button`}
              onClick={() => this.setState({ customValue: null })}
            >
              Reset <RenewIcon width={16} height={16} />
            </button>
          )}
        </div>
        {value && (
          <input
            disabled={disabled}
            className={classnames(
              `${prefix}--non-latin-type-example ${prefix}--type-display-03 ibm-type-regular`,
              customStyle,
              className, {
                'rtl': rtl
              }
            )}
            value={
              this.state.customValue !== null ? this.state.customValue : value
            }
            onChange={e => this.setState({ customValue: e.target.value })}
          />
        )}
        {ImageTypeSample && (
          <div
            className={classnames(
              `${prefix}--non-latin-type-example ${prefix}--type-display-03 ibm-type-regular`,
              customStyle, {
                'rtl': rtl
              }
            )}
          >
            <ImageTypeSample className={`${prefix}--non-latin-image-type-sample`} />&nbsp;
          </div>
        )}
        {comingSoonText && (
          <ComingSoonSticker className={`${prefix}--type-caption-01`}>
            {comingSoonText}
          </ComingSoonSticker>
        )}
      </div>
    )
  }
}

const TypefaceNonLatinScriptsExamples = () => {
  return (
    <div className={`${prefix}--non-latin-outer-spacing`}>
      <TypefaceExampleEditable
        customStyle={`${prefix}--non-latin-type-example-cyrillic`}
        typefaceName="IBM Plex Mono Cyrillic"
        className="ibm-type-mono"
        value="инженер"
      />
      <TypefaceExampleEditable
        customStyle={`${prefix}--non-latin-type-example-cyrillic`}
        typefaceName="IBM Plex Sans Cyrillic"
        value="инженер"
      />
      <TypefaceExampleEditable
        customStyle={`${prefix}--non-latin-type-example-cyrillic`}
        typefaceName="IBM Plex Serif Cyrillic"
        className="ibm-type-serif"
        value="инженер"
        />
      <TypefaceExampleEditable
        customStyle={`${prefix}--non-latin-type-example-devanagari`}
        typefaceName="IBM Plex Devanagari"
        className="ibm-type-devanagari"
        value="संज्ञानात्मक"
      />
      <TypefaceExampleEditable
        typefaceName="IBM Plex Sans Greek"
        value="νομίζω"
        />
      <TypefaceExampleEditable
        typefaceName="IBM Plex Sans Hebrew"
        className="ibm-type-hebrew"
        rtl
        value="לחשׁוֹב"
        />
      <TypefaceExampleEditable
        customStyle={`${prefix}--non-latin-type-example-thai`}
        typefaceName="IBM Plex Thai (non-looped)"
        className="ibm-type-thai"
        value="องค์ความรู้"
        />
    </div>
  )
}

export default TypefaceNonLatinScriptsExamples
