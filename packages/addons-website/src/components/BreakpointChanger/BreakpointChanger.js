import React from 'react'

import { settings } from 'carbon-components';
import { baseFontSize, breakpoints as carbonBreakpoints } from "@carbon/layout";

import {InputRange, StickyContainer, TypesetExample} from 'components'

import Utils from 'utils'
// import TypesetExamples from './TypesetExamples'
// import StickyContainer from 'containers/components/StickyContainer'

const { calculateHoverColor, isWithinBreakpoint } = Utils
const { prefix } = settings;

const breakpoints = {
  sm: Number(carbonBreakpoints.sm.width.replace('rem', '')) * baseFontSize,
  md: Number(carbonBreakpoints.md.width.replace('rem', '')) * baseFontSize,
  lg: Number(carbonBreakpoints.lg.width.replace('rem', '')) * baseFontSize,
  xlg: Number(carbonBreakpoints.xlg.width.replace('rem', '')) * baseFontSize,
  max: Number(carbonBreakpoints.max.width.replace('rem', '')) * baseFontSize,
}

// const typeSets = {
// caption: [
//   {
//     description: 'This is for captions or legal content in a layout — not for body copy.',
//     key: 'caption-01',
//     name: 'caption-01',
//   },
// ],
// label: [
//   {
//     description: 'This is for field labels in components and error messages',
//     key: 'label-01',
//     name: 'label-01',
//   },
// ],
// helperText: [
//   {
//     description: 'This is for explanatory helper text that appears below a field title within a component.',
//     key: 'helper-text-01',
//     name: 'helper-text-01',
//   },
// ],
// code: [
//   {
//     description: 'This is for inline code snippets and smaller code elements.',
//     version: 'mono',
//     key: 'code-01',
//     name: 'code-01',
//   },
//   {
//     description: 'This is for large code snippets and larger code elements.',
//     version: 'mono',
//     key: 'code-02',
//     name: 'code-02',
//   },
// ],
// body: [
//   {
//     description: 'This is for short paragraphs with no more than four lines and is commonly used in components.',
//     key: 'body-short-01',
//     name: 'body-short-01',
//   },
//   {
//     description: 'This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts.',
//     key: 'body-short-02',
//     name: 'body-short-02',
//   },
//   {
//     description: 'This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components such as accordion or structured list. Always left-align this type; never center it.',
//     key: 'body-long-01',
//     name: 'body-long-01',
//   },
//   {
//     description: 'This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. Always left-align type; never center it.',
//     key: 'body-long-02',
//     name: 'body-long-02',
//   },
// ],
// heading: [
//   {
//     description: 'This is for component and layout headings.',
//     key: 'heading-01',
//     name: 'heading-01',
//   },
//   {
//     description: 'This is for component and layout headings.',
//     key: 'heading-02',
//     name: 'heading-02',
//   },
//   {
//     description: 'This is for component and layout headings.',
//     key: 'heading-03',
//     name: 'heading-03',
//   },
// ],
// productHeading: [
//   {
//     description: 'This is for layout headings.',
//     key: 'productive-heading-04',
//     name: 'productive-heading-04',
//   },
//   {
//     description: 'This is for layout headings.',
//     key: 'productive-heading-05',
//     name: 'productive-heading-05',
//   },
// ],
// fluidHeading: [
//   {
//     description: 'Heading style',
//     key: 'expressive-heading-04',
//     name: 'expressive-heading-04',
//   },
//   {
//     description: 'Heading style',
//     key: 'expressive-heading-05',
//     name: 'expressive-heading-05',
//   },
// ],
// fluidParagraph: [
//   {
//     description: 'Paragraph',
//     key: 'expressive-paragraph-01',
//     name: 'expressive-paragraph-01',
//   },
// ],
// fluidQuotation: [
//   {
//     description: '“Quote.”',
//     key: 'quotation-01',
//     name: 'quotation-01',
//   },
//   {
//     description: '“Quote.”',
//     key: 'quotation-02',
//     name: 'quotation-02',
//   },
// ],
// fluidDisplay: [
//   {
//     description: 'Display',
//     key: 'display-01',
//     name: 'display-01',
//   },
//   {
//     description: 'Display',
//     key: 'display-02',
//     name: 'display-02',
//   },
//   {
//     description: 'Display',
//     key: 'display-03',
//     name: 'display-03',
//   },
//   {
//     description: 'Display',
//     key: 'display-04',
//     name: 'display-04',
//   },
// ],


// }

const navHeight = 48

// const Container = styled.div`
//   position: relative;
//   grid-auto-rows: auto;
//   margin-left: -1rem;
//   margin-right: -1rem;
//   @media (min-width: ${breakpointsREM.md}) {
//     margin-left: 0;
//     margin-right: 0;
//   }
// `

// const Button = styled.button`
//   background-color: ${props =>
//     props.selected ? colors.gray[100] : 'transparent'};
//   border: none;
//   border-radius: 0;
//   color: ${props => (props.selected ? colors.gray[10] : '')};
//   height: 100%;
//   margin: 0;
//   padding: 0 1rem;
//   text-transform: capitalize;
//   z-index: 4;

//   &:hover {
//     background-color: ${props =>
//       props.selected ? colors.gray[100] : colors.gray[20]};
//   }
// `

// const Controls = styled.div`
//   // grid-column: 1/-1;
//   height: 100%;
//   left: 0;
//   position: absolute !important;
//   top: 0;
//   width: 100vw;

//   @media (min-width: ${breakpointsREM.md}) {
//     margin-left: 0;
//     width: 100%;
//   }
// `

// const ControlsSticky = styled.div`
//   align-items: center;
//   background-color: #fff;
//   border-bottom: 1px solid ${colors.gray[20]};
//   grid-row: 1/1;
//   grid-template-rows: auto auto;
//   width: auto;
//   z-index: 2;
//   box-sizing: content-box;
// `

// const NavShiv = styled.div`
//   width: 100%;
//   height: 1rem;
//   grid-column: 1/-1;
//   grid-row: 1/1;
// `

// const BreakpointControls = styled.div`
//   // grid-column: 1 /-1;
//   grid-row: 1/2;
//   height: 3rem;
//   align-items: center;
//   display: flex;
//   overflow-x: auto;
//   white-space: nowrap;

//   @media (min-width: ${breakpointsREM.md}) {
//     grid-column: 1 / 6;
//   }
//   @media (min-width: ${breakpointsREM.lg}) {
//     grid-column: 1 / 7;
//   }
// `

// const ScreenControls = styled.div`
//   align-items: center;
//   display: grid;
//   // grid-column: 1 /-1;
//   grid-row: 2/3;
//   grid-template-columns: auto 1fr auto;
//   height: 3rem;
//   border-top: 1px solid ${colors.gray[20]};

//   @media (min-width: ${breakpointsREM.md}) {
//     border-top: none;
//     border-left: 1px solid ${colors.gray[20]};
//     grid-column: 6 / 9;
//     grid-row: 1/2;
//   }
//   @media (min-width: ${breakpointsREM.lg}) {
//     grid-column: 7 / 13;
//   }
// `

// const ScreenLabel = styled.label`
//   height: auto;
//   margin-bottom: 0;
//   // Need to set the width explicitly to make sure the slider
//   // keeps the same size when going from three to four digits (999-1000)
//   min-width: 3.4rem;
//   text-align: right;
// }
// `

// const Input = styled.input`
//   margin: 0;
//   margin-right: 20px;
//   width: 100%;
// `

// const ToggleContainer = styled.div`
//   grid-column: 1 / -1;
//   position: relative;
//   z-index: 1;
// `

// const ToggleButton = styled.button`
//   background-color: ${props =>
//     props.checked ? colors.gray[100] : colors.white[0]};
//   box-shadow: inset 0 -1px 0 0 ${colors.gray[20]};
//   color: ${props => (props.checked ? colors.white[0] : colors.gray[100])};
//   border: none;
//   cursor: pointer;
//   margin: 0;
//   height: 3rem;

//   input {
//     margin: 0;
//     visibility: hidden;
//     width: 0;
//   }

//   &:hover {
//     background-color: ${props =>
//       props.checked ? colors.gray[100] : colors.gray[20]};
//   }
// `

// const ButtonControlsContainer = styled.div`
//   height: 100%;
//   margin-left: auto;
// `
// const TypesetExamplesContainer = styled.div`
//   // padding-top: 1em;
// `
// const BreakpointsContainer = styled.div`
//   position: relative;
//   margin-top: 1rem;

//   @media (min-width: ${breakpointsREM.md}) { 
//     margin-top: 0;
//   }
// `

// const SectionSpacer = styled.div`
//   margin-bottom: calc(1rem + 1px);
// `
// const GroupTitleContainer = styled.div`
//   background-color: ${colors.gray[10]};
//   height: 3rem; 
//   padding: 1rem;
//   margin-bottom: 1px !important;
// `
// const GroupTitle = styled.div`
//   margin: 0;
//   padding: 0;
// `

class BreakpointChanger extends React.Component {
  state = {
    simulatedScreenWidth: 1056,
    tab: 0,
  }

  toggleBreakpoint = e => {
    console.log("BP " + e.target.value)
    this.setState({ simulatedScreenWidth: Number(e.target.value) })
  }

  toggleSet = value => {
    this.setState({ tab: value })
  }

  render() {
    const {typeSets, typeScale } = this.props
    
    const buttons = Object.keys(breakpoints).map(breakpointName => {
      return (
        <Button
          className="bx--type-body-long-01"
          value={breakpoints[breakpointName]}
          selected={isWithinBreakpoint(
            this.state.simulatedScreenWidth,
            breakpoints[breakpointName]
          )}
          onClick={this.toggleBreakpoint}
          key={'breakpoint-tab' + breakpointName}
        >
          {breakpointName}
        </Button>
      )
    })

    return (
      <div className={`${prefix}--breakpoint-changer-container`}>
          <div className={`${prefix}--breakpoint-changer-typeset-examples-container`}>
            <StickyContainer secondary={true}>
              <div className={`${prefix}--breakpoint-changer-group-title-container`}>
                <div className={`${prefix}--breakpoint-changer-typeset-examples-container ibm-type-b ibm-type-semibold`}>
                  Productive
                </div>
              </div>
            </StickyContainer>
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="caption"
              typeSet={typeSets['caption']}
              typeScale={typeScale['expressive-heading-04']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="label"
              typeSet={typeSets['label']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="helperText"
              typeSet={typeSets['helperText']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="code"
              typeSet={typeSets['code']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="body"
              typeSet={typeSets['body']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="heading"
              typeSet={typeSets['heading']}
            />
            <NavShiv />
            <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="productHeading"
              typeSet={typeSets['productHeading']}
            />
            <NavShiv />
          </div>
        <SectionSpacer />
        <StickyContainer top={{ hidden: '0px', visible: '3rem' }} zIndex="3">
            <GroupTitleContainer>
              <GroupTitle className="ibm-type-b ibm-type-semibold">
                Expressive
              </GroupTitle>
            </GroupTitleContainer>
            <ControlsSticky className="ibm-grid">
                <BreakpointControls>
                  <span
                    className="bx--type-body-long-01 ibm-padding--horizontal"
                    style={{ marginBottom: 0 }}
                  >
                    Breakpoints
                  </span>
                  <ButtonControlsContainer>{buttons}</ButtonControlsContainer>
                </BreakpointControls>
                <ScreenControls className="ibm-padding--horizontal">
                  <span
                    className="bx--type-body-long-01 ibm-type-regular ibm-padding--right"
                    style={{ marginBottom: 0, whiteSpace: 'nowrap' }}
                  >
                    Screen width
                  </span>
                  <InputRange
                    min={breakpoints.sm}
                    max={breakpoints.max}
                    value={this.state.simulatedScreenWidth}
                    onChange={this.toggleBreakpoint}
                  />
                  <ScreenLabel
                    className="bx--type-body-long-01"
                    htmlFor="screenWidthInput"
                  >
                    {this.state.simulatedScreenWidth}
                  </ScreenLabel>
                </ScreenControls>
              </ControlsSticky>

        </StickyContainer>
        <div className={`${prefix}--breakpoint-changer-typeset-examples-container`}>
          <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="fluidHeading"
              typeSet={typeSets['fluidHeading']}
            />
          <NavShiv />
          <TypesetExample
              simulatedScreenWidth={this.state.simulatedScreenWidth}
              name="fluidParagraph"
              typeSet={typeSets['fluidParagraph']}
            />
          <NavShiv />
          <TypesetExample
                simulatedScreenWidth={this.state.simulatedScreenWidth}
                name="fluidQuotation"
                typeSet={typeSets['fluidQuotation']}
              />
          <NavShiv />
          <TypesetExample
                simulatedScreenWidth={this.state.simulatedScreenWidth}
                name="fluidDisplay"
                typeSet={typeSets['fluidDisplay']}
              />
        </div>

      </div>
    )
  }
}

export default BreakpointChanger
