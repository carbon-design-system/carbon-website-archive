import React from 'react'
import classnames from 'classnames'
import RenewIcon from '@carbon/icons-react/lib/renew/20'
import { settings } from 'carbon-components';

const { prefix } = settings;
 
// import RenewIcon from '@ibmduo/icons/svg/renew-20px.svg'

// const ComingSoonSticker = styled.div`
//   margin-bottom: 0;
//   padding: 2.5rem;
//   border-radius: 100%;
//   color: ${colors.white[0]};
//   background-color: ${colors.purple[60]};
//   text-align: center;
//   width: 50px;
//   height: 50px; 
//   position: absolute;
//   right: 0;
//   top: 1rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: rotate(-30deg);
// `

// const Button = props => {
//   const buttonCSS = css`
//     background: none;
//     color: black;
//     border: 0;
//     padding: 0.5rem 0;
//     position: absolute;
//     top: 0;
//     right: 1rem;

//     & > * {
//       vertical-align: middle;
//     }
//   `

//   return <button {...props} className={cx(buttonCSS, props.className)} />
// }
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

    // const containerCSS = css`
    //   position: relative;
    //   border-bottom: 1px solid silver;
    //   border-top: 1px solid silver;
    //   margin-bottom: -1px;
    // `

    // // Emulate the scaling font-size
    // let imageTypeSampleCSS = css`
    //   display: inline-block;
    //   vertical-align: middle;
    //   box-sizing: content-box;
    //   height: calc(3.625rem + (7.38636vw - 1.47727rem));
    //   width: auto;
    //   @media (min-width: ${breakpointsREM.md}) {
    //     height: calc(5.85rem + (6.25vw - 2.625rem));
    //   }
    //   @media (min-width: ${breakpointsREM.lg}) {
    //     height: calc(7.85rem + (11.71875vw - 7.73438rem));
    //   }
    //   @media (min-width: ${breakpointsREM.xlg}) {
    //     height: calc(10.7rem + (12.5vw - 10.25rem));
    //   }
    //   @media (min-width: ${breakpointsREM.max}) {
    //     height: 12.85rem;
    //   }
    // `

    // const TypefaceNameHeading = styled.h3`
    //   max-width: 100%;
    //   margin-bottom: 0;
    //   display: block;
    //   border: 0;
    //   padding-top: .5rem;
    //   margin-top: 0;
    // `

    // const typeExampleCSS = css`
    //   white-space: nowrap;
    //   direction: ${rtl ? 'rtl' : 'ltr'};
    //   border: none;
    //   background-color: transparent;
    //   outline: none;
    //   height: 1.5em;
    //   padding: 0;
    //   padding-bottom: 0.5rem;
    //   padding-top: 1rem;
    //   border-width: 0;
    //   margin-bottom: 0;
    //   margin-top: 0;
    //   @media (min-width: ${breakpointsREM.md}) {
    //     margin-top: -0.5rem;
    //     margin-bottom: 0.5rem !important;
    //   }
    //   @media (min-width: ${breakpointsREM.lg}) {
    //     margin-top: -1.5rem;
    //     margin-bottom: 0.5rem !important;
    //   }
    //   width: 100%;
    //   color: ${colors.gray[90]};
    //   -webkit-text-fill-color: ${colors.gray[90]}; // Needs manual autoprefixing
    //   line-height: 2em; // Fix weird font-cropping issue on Chrome
    //   &::selection {
    //     background: ${colors.purple[20]};
    //   }

    //   // safari wrong height fix 
    //   @media (max-width: ${breakpointsREM.md}) { 
    //     line-height: 1.5em;
    //     margin-bottom: 1rem !important;
    //     padding-bottom: 1rem;
    //   }}
      
    //   @media not all and (min-resolution:.001dpcm) { @media { 
    //     line-height: 1.5em;
    //     margin-bottom: 1rem !important;
    //     padding-bottom: 1rem;
    //   }}
    //   @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { @media {
    //     line-height: 100%;
    //   }}} 

      
    // `
    return (
      <div className={`${prefix}--non-latin-container`}>
        <div>
          <h3 className={classnames([`${prefix}--type-body-long-01`, `${prefix}--non-latin-typeface-name-heading` ])}>
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

// const typeExampleDevanagriCSS = css`   
//   margin-top: 0rem !important;
//   margin-bottom: 1rem; 
//   padding-top: 0rem !important;
//   padding-bottom: 0;
//   // safari cuts thai fonts off, this is a workaround
//   @media (min-width: ${breakpointsREM.lg}) {
//     padding-top: 1rem !important;
//   }
//   @media (max-width: ${breakpointsREM.md}) { 
//     margin-top: 0rem !important;
//     margin-bottom: 1rem;
//     line-height: 1.5em;
//     padding-bottom: 0;
//   }}
//   @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { @media { 
//     margin-top: 0rem !important;
//     margin-bottom: 1rem; 
//     line-height: 1.5em;     
//   }}}
// `
// const typeExampleThaiCSS = css`  
//   padding-bottom: 1rem !important;
//   margin-bottom: 1rem !important;
//   // safari cuts thai fonts off, this is a workaround
//   @media not all and (min-resolution:.001dpcm) { @media { 
//     line-height: 1.5em;
//   }}
//   @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { @media {  
//     line-height: 1.5em;     
//   }}}
// `
// const typeExampleCyrillicCSS = css`  
//   @media not all and (min-resolution:.001dpcm) { @media { 
//     padding-top: 0;
//     padding-bottom: 0;
//   }}
//   @media screen and (min-color-index:0) and(-webkit-min-device-pixel-ratio:0) { @media {  
//     padding-top: 0;  
//     padding-bottom: 0;   
//   }}}
// `

// const outerSpacingStyles = css`
//   margin-top: 2rem;
//   margin-bottom: 3rem;
// `

const TypefaceNonLatinScriptsExamples = () => {
  return (
    <div className={`ibm-padding--horizontal' ${prefix}--non-latin-outer-spacing`}>
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
