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
          'M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm-1.1 6h2.2v11h-2.2V8zM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25z',
      },
    },
    {
      elem: 'path',
      attrs: {
        d:
          'M17.5 23.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM17.1 8h-2.2v11h2.2V8z',
        'data-icon-path': 'inner-path',
        opacity: '0',
      },
    },
  ],
  name: 'warning--filled',
  size: 32,
};
