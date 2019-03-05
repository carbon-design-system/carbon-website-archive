import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { baseFontSize, breakpoints as carbonBreakpoints } from '@carbon/layout';
import { findLastIndex, values } from 'lodash';

import InputRange from '../InputRange';
import StickyContainer from '../StickyContainer';
import TypesetExample from '../TypesetExample';

const { prefix } = settings;

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
};

const nextLargerBreakpointPx = viewportWidth => {
  return values(breakpoints)[indexOfCurrentBreakpoint(viewportWidth) + 1];
};

const indexOfCurrentBreakpoint = viewportWidth => {
  return findLastIndex(values(breakpoints), width => viewportWidth >= width);
};

const isWithinBreakpoint = (viewportWidth, currentBreakpoint) => {
  if (viewportWidth === currentBreakpoint) return true;
  return (
    viewportWidth >= currentBreakpoint &&
    viewportWidth < nextLargerBreakpointPx(currentBreakpoint)
  );
};

class BreakpointChanger extends React.Component {
  state = {
    simulatedScreenWidth: 1056,
    tab: 0,
  };

  toggleBreakpoint = e => {
    console.log('BP ' + e.target.value);
    this.setState({ simulatedScreenWidth: Number(e.target.value) });
  };

  toggleSet = value => {
    this.setState({ tab: value });
  };

  render() {
    const { typeSets, typeScale } = this.props;

    const buttons = Object.keys(breakpoints).map(breakpointName => {
      return (
        <button
          className={`${prefix}--breakpoint-changer-button ${prefix}--type-body-long-01 ${
            isWithinBreakpoint(
              this.state.simulatedScreenWidth,
              breakpoints[breakpointName]
            )
              ? 'selected'
              : ''
          }`}
          value={breakpoints[breakpointName]}
          selected={isWithinBreakpoint(
            this.state.simulatedScreenWidth,
            breakpoints[breakpointName]
          )}
          onClick={this.toggleBreakpoint}
          key={'breakpoint-tab' + breakpointName}>
          {breakpointName}
        </button>
      );
    });

    return (
      <div className={`${prefix}--breakpoint-changer-container`}>
        <div
          className={`${prefix}--breakpoint-changer-typeset-examples-container`}>
          <StickyContainer visible={false}>
            <div
              className={`${prefix}--breakpoint-changer-group-title-container ${prefix}--row`}>
              <div
                className={`${prefix}--breakpoint-changer-typeset-examples-container ${prefix}--type-heading-02 ibm-type-semibold`}>
                Productive
              </div>
            </div>
          </StickyContainer>
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="caption"
            typeSet={typeSets['caption']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="label"
            typeSet={typeSets['label']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="helperText"
            typeSet={typeSets['helperText']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="code"
            typeSet={typeSets['code']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="body"
            typeSet={typeSets['body']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="heading"
            typeSet={typeSets['heading']}
            typeScale={typeScale}
          />
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="productHeading"
            typeSet={typeSets['productHeading']}
            typeScale={typeScale}
          />
        </div>
        <div className={`${prefix}--breakpoint-changer-section-spacer`} />
        <StickyContainer visible={false}>
          <div
            className={`${prefix}--breakpoint-changer-group-title-container ${prefix}--row`}>
            <div
              className={`${prefix}--breakpoint-changer-typeset-examples-container ${prefix}--type-heading-02 ibm-type-semibold`}>
              Expressive
            </div>
          </div>
          <div
            className={`${prefix}--breakpoint-changer-controls-sticky ${prefix}--row`}>
            <div
              className={`${prefix}--breakpoint-changer-breakpoint-controls ${prefix}--col-md-8 ${prefix}--col-lg-6`}>
              <span
                className={`${prefix}--type-body-long-01 ibm-padding--horizontal`}
                style={{ marginBottom: 0 }}>
                Breakpoints
              </span>
              <div
                className={`${prefix}--breakpoint-changer-button-controls-container`}>
                {buttons}
              </div>
            </div>
            <div
              className={`${prefix}--breakpoint-changer-screen-controls ibm-padding--horizontal ${prefix}--col-md-4 ${prefix}--col-lg-6`}>
              <span
                className={`${prefix}--type-body-long-01 ${prefix}--breakpoint-changer-screen-width-label`}
                style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                Screen width
              </span>
              <InputRange
                min={breakpoints.sm}
                max={breakpoints.max}
                value={this.state.simulatedScreenWidth}
                onChange={this.toggleBreakpoint}
              />
              <label
                className={`${prefix}--breakpoint-changer-screen-label ${prefix}--type-body-long-01`}
                htmlFor="screenWidthInput">
                {this.state.simulatedScreenWidth}
              </label>
            </div>
          </div>
        </StickyContainer>
        <div
          className={`${prefix}--breakpoint-changer-typeset-examples-container`}>
          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="fluidHeading"
            typeSet={typeSets['fluidHeading']}
            typeScale={typeScale}
          />

          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="fluidParagraph"
            typeSet={typeSets['fluidParagraph']}
            typeScale={typeScale}
          />

          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="fluidQuotation"
            typeSet={typeSets['fluidQuotation']}
            typeScale={typeScale}
          />

          <TypesetExample
            simulatedScreenWidth={this.state.simulatedScreenWidth}
            name="fluidDisplay"
            typeSet={typeSets['fluidDisplay']}
            typeScale={typeScale}
          />
        </div>
      </div>
    );
  }
}

BreakpointChanger.propTypes = {
  // object of font types
  typeSets: PropTypes.object.isRequired,

  // object of breakpoint data
  typeScale: PropTypes.object.isRequired,
};

export default BreakpointChanger;
