/* eslint-disable */
module.exports = {
  'core-tokens': {
    '$interactive-01': {
      role: [
        'Primary interactive color',
        'Interactive text',
        'Selected elements',
        'Featured elements',
      ],
      value: {
        white: {
          name: 'Blue 60',
          hex: '#0062ff',
        },
        'gray-10': {
          name: 'Blue 60',
          hex: '#0062ff',
        },
      },
    },
    '$interactive-02': {
      role: ['Secondary interactive color', 'Loading'],
      value: {
        white: {
          name: 'Gray 100',
          hex: '#171717',
        },
        'gray-10': {
          name: 'Blue 60',
          hex: '#0062ff',
        },
      },
    },
    '$ui-01': {
      role: ['Primary container background', 'Secondary page background'],
      value: {},
    },
    '$ui-02': {
      role: ['Primary page background', 'Secondary container background'],
    },
    '$ui-03': {
      role: ['Subtle border', 'Tertiary background color'],
    },
    '$ui-04': {
      role: ['3:1 AA element contrast', 'Medium contrast border'],
    },
    '$ui-05': {
      role: [
        '4.5:1 AA element contrast',
        'High contrast border',
        'Emphasis elements',
      ],
    },
    '$text-01': {
      role: [
        'Primary text',
        'Body copy',
        'Headers',
        'Hover text color for text-02',
      ],
    },
    '$text-02': {
      role: ['Secondary text', 'Input labels', 'Help text'],
    },
    '$text-03': {
      role: ['Placeholder text'],
    },
    '$icon-01': {
      role: ['Primary icons'],
    },
    '$icon-02': {
      role: ['Secondary icons'],
    },
    '$inverse-01': {
      role: ['Inverse text color', 'Inverse icon color'],
    },
    '$inverse-02': {
      role: ['High contrast backgrounds', 'High contrast elements'],
    },
    '$field-01': {
      role: ['Default input fields', 'Field color on $ui-01 backgrounds'],
    },
    '$field-02': {
      role: ['Input field color on $ui-02 backgrounds'],
    },
    '$support-01': {
      role: ['Error'],
    },
    '$support-02': {
      role: ['Success'],
    },
    '$support-03': {
      role: ['Warning'],
    },
    '$support-04': {
      role: ['Information'],
    },
    '$overlay-01': {
      role: ['Background overlay'],
    },
    '$overlay-02': {
      role: ['Contrast background overlay'],
    },
  },
  'interaction-tokens': {
    $focus: {
      role: ['Focus border', 'Focus underline'],
    },
    '$hover-primary': {
      role: ['$interactive-01 hover'],
    },
    '$hover-primary-text': {
      role: ['$interactive-01 text hover'],
    },
    '$hover-secondary': {
      role: ['Secondary hover', '$inverse-01 hover'],
    },
    '$hover-ui': {
      role: ['$ui-01 hover', '$ui-02 hover', 'Transparent background hover'],
    },
    '$hover-danger': {
      role: ['Danger hover', '$support-01 hover'],
    },
    '$hover-row': {
      role: ['Row hover'],
    },
    '$active-primary': {
      role: ['$brand-01 active'],
    },
    '$active-secondary': {
      role: ['Secondary active', '$inverse-01 active'],
    },
    '$active-ui': {
      role: ['$ui-01 active', '$ui-02 active'],
    },
    '$active-danger': {
      role: ['Danger active', '$support-01 active'],
    },
    '$selected-ui': {
      role: ['Selected UI elements'],
    },
    '$visited-link': {
      role: ['Visited links'],
    },
    '$disabled-01': {
      role: ['Disabled fields', 'Disabled backgrounds', 'Disabled border'],
    },
    '$disabled-02': {
      role: [
        'Disabled elements on $disabled-01',
        'Disabled label',
        'Disabled text on $disabled-01',
        'Disabled icons',
        'Disabled border',
      ],
    },
    '$disabled-03': {
      role: ['Disabled text on $disabled-02', 'Disabled icons on $disabled-02'],
    },
  },
};
