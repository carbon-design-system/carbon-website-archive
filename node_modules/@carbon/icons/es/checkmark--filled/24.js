export default {
  elem: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: 24,
    height: 24,
  },
  content: [
    {
      elem: 'path',
      attrs: {
        d:
          'M12 1C6 1 1 6 1 12s5 11 11 11 11-4.9 11-11S18.1 1 12 1zm-1.6 15.3l-3.9-3.9 1.3-1.2 2.7 2.7 5.8-5.8 1.3 1.3-7.2 6.9z',
      },
    },
    {
      elem: 'path',
      attrs: {
        d: 'M10.4 16.3l-3.9-3.9 1.3-1.2 2.7 2.7 5.8-5.8 1.3 1.3-7.2 6.9z',
        'data-icon-path': 'inner-path',
        opacity: '0',
      },
    },
  ],
  name: 'checkmark--filled',
  size: 24,
};
