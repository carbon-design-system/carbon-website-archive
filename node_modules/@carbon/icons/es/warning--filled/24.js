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
          'M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm-.9 5h1.8v8h-1.8V6zm.9 13.2c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2z',
      },
    },
    {
      elem: 'path',
      attrs: {
        d:
          'M13.2 18c0 .7-.6 1.2-1.2 1.2s-1.2-.6-1.2-1.2.6-1.2 1.2-1.2 1.2.5 1.2 1.2zm-.3-12h-1.8v8h1.8V6z',
        'data-icon-path': 'inner-path',
        opacity: '0',
      },
    },
  ],
  name: 'warning--filled',
  size: 24,
};
