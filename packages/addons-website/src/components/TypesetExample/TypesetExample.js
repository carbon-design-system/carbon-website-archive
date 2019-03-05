import React from 'react'
import { settings } from 'carbon-components';
import classnames from 'classnames'
import { findKey, values } from 'lodash'
import { baseFontSize, breakpoints as carbonBreakpoints } from "@carbon/layout";

const { prefix } = settings;

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
}

const defaultTypeValues = {
  'letter-spacing': 0,
}

const TypesetExample = props => {
  return (
    <div className={`${prefix}--typeset-example-container`}>
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
          const typeKeys = Object.keys(breakpoints)
          const typeStylesUntilCurrentBreakpoint = []
          for (let item of typeKeys) {
            typeStylesUntilCurrentBreakpoint.push(props.typeScale[item])
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
            return (
              currentBreakpointSpecs[attribute] * (baseFontSize)
            )
          }
          const calculateFluidLineHeight = attribute => {
            return (
              currentBreakpointSpecs[attribute] * (baseFontSize)
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

        const versionClassName = type.version ? `${prefix}--type-${type.version}` : ''

        const versionClassNames = classnames(`${prefix}--type-${type.key}`, versionClassName)

        return (
          <div
            key={`${props.name}${type.key}${type.version}`}
            style={{ padding: 0 }}
          >
            <div className={`${prefix}--typeset-example-row ${prefix}--row`}>
              <div className={`${prefix}--typeset-example-description ${prefix}--col-md-8`}>
                <p
                  className={versionClassNames}
                  style={specs}
                >
                  {type.description}
                </p>
              </div>
              <div className={`${prefix}--typeset-example-specs ${prefix}--col-md-4 ibm-padding`}>
                <p className={`${prefix}--type-body-short-01`}>
                  <span className={`${prefix}--type-semibold`}>
                    {type.name}{' '}
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
                    <span><br /><span className={`${prefix}--type-semibold`}>warning: </span>{ displaySpecs['warning'] }<br /></span>
                  ) : (
                    <br />
                  )}
                  <code className={`${prefix}--snippet--inline`}>${type.name}</code>
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
