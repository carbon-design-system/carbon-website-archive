require('dotenv').config();

const path = require('path');

const { PATH_PREFIX = '/' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    title: 'Carbon Design System',
    titleInternal: 'IBM Product Design'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-80001368-1",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carbon Design System`,
        short_name: `Carbon`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `src/content/global/images/favicon-32.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-component`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg height="16" width="16" fill="#0062ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>icons</title><g id="Icon"><path d="M29.2416,6.7587a6.0194,6.0194,0,0,0-8.5039,0l1.4172,1.4171a4.0089,4.0089,0,0,1,5.67,5.6694l-7.9793,7.9791a4.0089,4.0089,0,0,1-5.67-5.6694l1.4176-1.4171L14.176,13.3206l-1.4176,1.4171a6.0131,6.0131,0,0,0,8.5039,8.5036l7.9793-7.9791A6.02,6.02,0,0,0,29.2416,6.7587Z"/><path d="M4.1783,24.8217a4.0164,4.0164,0,0,1,0-5.6738l7.9688-7.9672a4.0121,4.0121,0,1,1,5.6746,5.6734l-2.12,2.1195L17.12,20.3918l2.12-2.1195a6.0179,6.0179,0,0,0-8.5114-8.51L2.76,17.73a6.0181,6.0181,0,0,0,8.5114,8.51L9.8529,24.8217A4.0177,4.0177,0,0,1,4.1783,24.8217Z"/></g><g id="Transparent_Rectangle" data-name="Transparent Rectangle"><rect class="cls-1" x="-0.0116" y="-0.0007" width="32" height="32"/></g></svg>`,
            },
            className: `custom-class`,
          },
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 606,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 333, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: true,
              backgroundColor: "transparent",
            },
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              directory: `${__dirname}/src/content`,
              // Optional:

              // Custom protocol for parsing the embedding link
              // default:
              protocol: 'embedded-codesandbox://',

              // Customise Codesandbox embedding options:
              // https://codesandbox.io/docs/embedding#embed-options
              // default:
              embedOptions: {
                view: 'preview',
                hidenavigation: 1,
              },

              // Customise the embedding iframe given the generated url
              // default:
              getIframe: url =>
                `<iframe src="${url}" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules')],
        importer: (url, prev, done) => {
          done({
            file: !/import-once(\.scss)?$/.test(url)
              ? url
              : path.resolve(__dirname, 'src/styles/import-once'),
          });
        },
      },
    },
  ],
};
