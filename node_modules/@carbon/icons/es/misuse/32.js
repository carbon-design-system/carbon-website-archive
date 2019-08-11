export default {
  elem: 'svg',
  attrs: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 32 32',
    width: 32,
    height: 32,
  },
  content: [
    {
      elem: 'path',
      attrs: {
        d:
          'M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z',
      },
    },
    {
      elem: 'path',
      attrs: {
        d:
          'M21.4 23L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z',
        'data-icon-path': 'inner-path',
        opacity: '0',
      },
    },
  ],
  name: 'misuse',
  size: 32,
};
