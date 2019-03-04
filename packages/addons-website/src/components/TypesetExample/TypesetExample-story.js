import { storiesOf } from '@storybook/react';
import React from 'react';
import TypesetExample from './TypesetExample'

const typeSets = {
  caption: [
    {
      description: 'This is for captions or legal content in a layout — not for body copy.',
      key: 'caption-01',
      name: 'caption-01',
    },
  ],
  label: [
    {
      description: 'This is for field labels in components and error messages',
      key: 'label-01',
      name: 'label-01',
    },
  ],
  helperText: [
    {
      description: 'This is for explanatory helper text that appears below a field title within a component.',
      key: 'helper-text-01',
      name: 'helper-text-01',
    },
  ],
  code: [
    {
      description: 'This is for inline code snippets and smaller code elements.',
      version: 'mono',
      key: 'code-01',
      name: 'code-01',
    },
    {
      description: 'This is for large code snippets and larger code elements.',
      version: 'mono',
      key: 'code-02',
      name: 'code-02',
    },
  ],
  body: [
    {
      description: 'This is for short paragraphs with no more than four lines and is commonly used in components.',
      key: 'body-short-01',
      name: 'body-short-01',
    },
    {
      description: 'This is for short paragraphs with no more than four lines and is commonly used in the expressive type theme for layouts.',
      key: 'body-short-02',
      name: 'body-short-02',
    },
    {
      description: 'This is commonly used in both the expressive and the productive type theme layouts for long paragraphs with more than four lines. It is a good size for comfortable, long-form reading. Use this for longer body copy in components such as accordion or structured list. Always left-align this type; never center it.',
      key: 'body-long-01',
      name: 'body-long-01',
    },
    {
      description: 'This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. Always left-align type; never center it.',
      key: 'body-long-02',
      name: 'body-long-02',
    },
  ],
  heading: [
    {
      description: 'This is for component and layout headings.',
      key: 'heading-01',
      name: 'heading-01',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'heading-02',
      name: 'heading-02',
    },
    {
      description: 'This is for component and layout headings.',
      key: 'heading-03',
      name: 'heading-03',
    },
  ],
  productHeading: [
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-04',
      name: 'productive-heading-04',
    },
    {
      description: 'This is for layout headings.',
      key: 'productive-heading-05',
      name: 'productive-heading-05',
    },
  ],
  fluidHeading: [
    {
      description: 'Heading style',
      key: 'expressive-heading-04',
      name: 'expressive-heading-04',
    },
    {
      description: 'Heading style',
      key: 'expressive-heading-05',
      name: 'expressive-heading-05',
    },
  ],
  fluidParagraph: [
    {
      description: 'Paragraph',
      key: 'expressive-paragraph-01',
      name: 'expressive-paragraph-01',
    },
  ],
  fluidQuotation: [
    {
      description: '“Quote.”',
      key: 'quotation-01',
      name: 'quotation-01',
    },
    {
      description: '“Quote.”',
      key: 'quotation-02',
      name: 'quotation-02',
    },
  ],
  fluidDisplay: [
    {
      description: 'Display',
      key: 'display-01',
      name: 'display-01',
    },
    {
      description: 'Display',
      key: 'display-02',
      name: 'display-02',
    },
    {
      description: 'Display',
      key: 'display-03',
      name: 'display-03',
    },
    {
      description: 'Display',
      key: 'display-04',
      name: 'display-04',
    },
  ],
  
  
  }

storiesOf('Typeset Example', module).add(
  'Typeset Example',
  () => (
    <div style={{width: '100%'}}>
      <TypesetExample simulatedScreenWidth={400}
              name="caption"
              typeSet={typeSets['caption']} >

      </TypesetExample>
    </div>
  ),
  {
    info: {
      text: 'Typeset Example',
    },
  }
)