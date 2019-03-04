import React from 'react'
import { settings } from 'carbon-components';
const { prefix } = settings;
import classnames from 'classnames'

import { findKey, values } from 'lodash'

const TYPE_VERSION_REPLACE_REGEX = /.*--/

const rem = 16

// responsive
const breakpoints = {
  sm: 20 * 16,
  md: 42 * 16,
  lg: 66 * 16,
  xlg: 82 * 16, // No idea why this is stored separately in gridish
  max: 99 * 16,
}

// This is not part of ibmduo-grid, only used in this website
const breakpointsREM = {
  sm: 20 + 'rem',
  md: 42 + 'rem',
  lg: 66 + 'rem',
  xlg: 82 + 'rem',
  max: 99 + 'rem',
}

const defaultTypeValues = {
  'letter-spacing': 0,
}

// This is basically the $ibm-type-scale in
// @ibmduo/type/scss/_variables.scss
// converted to a js object.
//
// Structure kept as close as possible in order to make
// updating the values easy.
const ibmTypeScale = {
  'caption-01': {
    sm: {
      'step': 1,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': .75,
      'line-height': 1,
      'letter-spacing': 0.32,
    }
  },
  'label-01': {
    sm: {
      'step': 1,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': .75,
      'line-height': 1,
      'letter-spacing': 0.32,
    }
  },
  'helper-text-01': {
    sm: {
      'step': 1,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-style': 'italic',
      'font-size': .75,
      'line-height': 1,
      'letter-spacing': 0.32,
    }
  },

  'body-short-01': {
    sm: {
      'step': 2,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': .875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    }
  },
  'body-short-02': {
    sm: {
      'step': 3,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    }
  },
  'body-long-01': {
    sm: {
      'step': 2,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 0.875,
      'line-height': 1.25,
      'letter-spacing': 0.16,
    }
  },
  'body-long-02': {
    sm: {
      'step': 3,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1,
      'line-height': 1.5,
      'letter-spacing': 0,
    }
  },
  'code-01': {
    sm: {
      'step': 1,
      'font': 'PlexMono',
      'font-weight': '400',
      'font-size': .75,
      'line-height': 1,
      'letter-spacing': 0.32,
    }
  },
  'code-02': {
    sm: {
      'step': 1,
      'font': 'PlexMono',
      'font-weight': '400',
      'font-size': .875,
      'line-height': 1.25,
      'letter-spacing': 0.32,
    }
  },
  'heading-01': {
    sm: {
      'step': 2,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 0.875,
      'line-height': 1.125,
      'letter-spacing': 0.16,
    },
  },
  'heading-02': {
    sm: {
      'step': 3,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 1,
      'line-height': 1.375,
      'letter-spacing': 0,
    }
  },
  'heading-03': {
    sm: {
      'step': 3,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    }
  },
  'productive-heading-04': {
    sm: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    }
  },
  'productive-heading-05': {
    sm: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    }
  },

  'expressive-heading-04': {
    sm: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    md: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    lg: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    max: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    

  },

  'expressive-heading-05': {
    sm: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      'step': 9,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      'step': 11,
      'font': 'PlexSans',
      'font-weight': '400',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      'step': 13,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'expressive-paragraph-01': {
    sm: {
      'step': 6,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    md: {
      'step': 6,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    lg: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    xlg: {
      'step': 7,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-01': {
    sm: {
      'step': 5,
      'font': 'PlexSerif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    md: {
      'step': 5,
      'font': 'PlexSerif',
      'font-weight': '400',
      'font-size': 1.25,
      'line-height': 1.625,
      'letter-spacing': '0',
    },
    lg: {
      'step': 6,
      'font': 'PlexSerif',
      'font-weight': '400',
      'font-size': 1.5,
      'line-height': 1.875,
      'letter-spacing': '0',
    },
    xlg: {
      'step': 7,
      'font': 'PlexSerif',
      'font-weight': '300',
      'font-size': 1.75,
      'line-height': 2.25,
      'letter-spacing': '0',
    },
    max: {
      'step': 8,
      'font': 'PlexSerif',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
  },
  'quotation-02': {
    sm: {
      'step': 8,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2,
      'line-height': 2.5,
      'letter-spacing': '0',
    },
    md: {
      'step': 9,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2.25,
      'line-height': 2.75,
      'letter-spacing': '0',
    },
    lg: {
      'step': 10,
      'font': 'PlexSerif',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
    },
    xlg: {
      'step': 11,
      'font': 'PlexSerif',
      'font-weight': '300',
      'font-size': 3,
      'line-height': 3.5,
      'letter-spacing': '0',
    },
    max: {
      'step': 13,
      'font': 'PlexSerif',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
    },
  },
  'display-01': {
    sm: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    md: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    lg: {
      'step': 12,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    xlg: {
      'step': 13,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    max: {
      'step': 15,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
  },
  'display-02': {
    sm: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    md: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    lg: {
      'step': 12,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 3.375,
      'line-height': 4,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    xlg: {
      'step': 13,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 3.75,
      'line-height': 4.375,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    max: {
      'step': 15,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 4.75,
      'line-height': 5.375,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
  },
  'display-03': {
    sm: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    md: {
      'step': 14,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    lg: {
      'step': 17,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': '-0.64',
      'warning': 'Never use this style as the main headline'
    },
    xlg: {
      'step': 20,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': '-0.64',
      'warning': 'Never use this style as the main headline'
    },
    max: {
      'step': 23,
      'font': 'PlexSans',
      'font-weight': '300',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': '-0.96',
      'warning': 'Never use this style as the main headline'
    },
  },
  'display-04': {
    sm: {
      'step': 10,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 2.625,
      'line-height': 3.125,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    md: {
      'step': 14,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 4.25,
      'line-height': 4.875,
      'letter-spacing': '0',
      'warning': 'Never use this style as the main headline'
    },
    lg: {
      'step': 17,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 5.75,
      'line-height': 6.375,
      'letter-spacing': -0.64,
      'warning': 'Never use this style as the main headline'
    },
    xlg: {
      'step': 20,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 7.625,
      'line-height': 8.125,
      'letter-spacing': -0.64,
      'warning': 'Never use this style as the main headline'
    },
    max: {
      'step': 23,
      'font': 'PlexSans',
      'font-weight': '600',
      'font-size': 9.75,
      'line-height': 10.25,
      'letter-spacing': -0.96,
      'warning': 'Never use this style as the main headline'
    },
  },

}

const TypesetExample = props => {
   
  return (
    <div>
      {(props.typeSet || []).map(type => {
        // TODO think these breakpoint helpers could actually be broken out into
        // utility functions. Could be useful in other files like Typeset.js as well
        const indexOfClosestLargerBreakpoint = Math.max(
          0,
          values(breakpoints).findIndex(
            width => props.simulatedScreenWidth <= width
          )
        )

        const currentBreakpointPx = values(breakpoints)[
          indexOfClosestLargerBreakpoint
        ]
        const nextLargerBreakpointPx = values(breakpoints)[
          indexOfClosestLargerBreakpoint - 1
        ]

        const currentBreakpointName = findKey(
          breakpoints,
          val => val === currentBreakpointPx
        )
        const nextLargerBreakpointName = findKey(
          breakpoints,
          val => val === nextLargerBreakpointPx
        )

        // Merge all styles up to the defined breakpoint.
        // Basically same as the mobile first + min-width defined in css.
        //
        // Possibly we could also just render the styles into emotion CSS and toggle classes on and off
        // depending on simulatedScreenWidth. Might be more performant.
        //
        // We still need the structured information for UI display purposes though.
        const getCurrentCompoundStylesForBreakpoint = breakpointName => {
          const typeKeys = Object.keys(breakpointsREM)
          const typeStylesUntilCurrentBreakpoint = []
          for (let item of typeKeys) {
            typeStylesUntilCurrentBreakpoint.push(ibmTypeScale[type.key][item])
            if (item === breakpointName) break
          }
          return Object.assign(
            {},
            defaultTypeValues,
            ...typeStylesUntilCurrentBreakpoint
          )
        }

        const currentBreakpointSpecs = getCurrentCompoundStylesForBreakpoint(
          currentBreakpointName
        )

        const nextLargerBreakpointSpecs = getCurrentCompoundStylesForBreakpoint(
          nextLargerBreakpointName
        )

        const fluidTypeGrowthFactor =
          (props.simulatedScreenWidth - currentBreakpointPx) /
          (nextLargerBreakpointPx - currentBreakpointPx)

          const calculateFluidTypeSize = attribute => {
            // console.log('currentBreakpointSpecs[attribute] ' + currentBreakpointSpecs[attribute])
            // console.log('nextLargerBreakpointSpecs[attribute] ' + nextLargerBreakpointSpecs[attribute])
            // console.log('fluidTypeGrowthFactor ' + fluidTypeGrowthFactor)
            return (
              currentBreakpointSpecs[attribute] * (rem)
            )
          }
          const calculateFluidLineHeight = attribute => {
            return (
              currentBreakpointSpecs[attribute] * (rem)
            )
          }
  
          const truncateAttributeLabel = attribute => {
  
            return specs[attribute].length > 7
              ? `${specs[attribute].substr(0, 5)}px`
              : specs[attribute]
          }
        
          const displayWeight = (weight, style) => {
            if (style == 'italic') {
              return (weight+' / Italic')
            } else {
              switch (weight) {
                case '300':
                  return ('300 / Light')
                case '400':
                  return ('400 / Regular')
                case '600':
                  return ('600 / Semi-Bold')
                default:
                  return(weight)
            }
            }
          }
        const specs = {
          fontWeight: currentBreakpointSpecs['font-weight'],
          fontSize: `${calculateFluidTypeSize('font-size')}px`,
          fontStyle: currentBreakpointSpecs['font-style'],
          lineHeight: `${calculateFluidLineHeight('line-height')}px`,
          letterSpacing: currentBreakpointSpecs['letter-spacing'],
        }
        const displaySpecs = {
          step: currentBreakpointSpecs['step'],
          font: currentBreakpointSpecs['font'],
          style: currentBreakpointSpecs['font-style'],
          fontWeight: displayWeight(currentBreakpointSpecs['font-weight'], currentBreakpointSpecs['font-style']),
          fontSize: `${calculateFluidTypeSize('font-size')}px` + ' ('+ currentBreakpointSpecs['font-size'] + `rem)`,
          lineHeight: `${calculateFluidLineHeight('line-height')}px` + ` (` + currentBreakpointSpecs['line-height'] + `rem)`,
          letterSpacing: currentBreakpointSpecs['letter-spacing'],
          warning: currentBreakpointSpecs['warning'],
        }

        const versionClassName = type.version ? `ibm-type-${type.version}` : ''

        // const samplePStyle = css`
        //   @media (min-width: ${breakpointsREM.md}) {
        //     padding-right: 25%;
        //   }
        // `
        const versionClassNames = classnames(`ibm-type-${type.key}`, versionClassName) //, samplePStyle)

        return (
          <div
            key={`${props.name}${type.key}${type.version}`}
            style={{ padding: 0 }}
            className={`${prefix}--typeset-example-container ibm-grid`}
          >
            <div className="ibm-grid">
              <div className={`${prefix}--typeset-example-mask ibm-padding`}>
                <div className={`${prefix}--typeset-example-example`}>
                  <p
                    className={versionClassNames}
                    style={specs}
                  >
                    {type.description}
                  </p>
                </div>
              </div>
              <div className={`${prefix}--typeset-example-specs ibm-padding`}>
                <p className={`${prefix}--type-body-short-01`}>
                  <span className="ibm-type-semibold">
                    {type.name}{' '}
                    {/* {type.version &&
                      type.version.replace(TYPE_VERSION_REPLACE_REGEX, '')} */}
                  </span>
                  <br />
                  Step: {displaySpecs['step']}
                  <br />
                  Font: {displaySpecs['font']}
                  <br />
                  Weight: <span style={{textTransform: 'capitalize'}}>{displaySpecs['fontWeight']}</span>
                  <br />
                
                  Size: {displaySpecs['fontSize']}
                  <br />
                  Line-height: {displaySpecs['lineHeight']}
                  <br />
                  Letter-spacing: {displaySpecs['letterSpacing']}rem
                  {displaySpecs['warning'] != null ? (
                    <span><br /><span className="ibm-type-semibold">warning: </span>{ displaySpecs['warning'] }<br /></span>
                  ) : (
                    <br />
                  )}
                  <code className={`${prefix}--typeset-example-code-style`}>${type.name}</code>
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TypesetExample
