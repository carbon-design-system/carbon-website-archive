require('dotenv').config();

const path = require('path');

const { PATH_PREFIX = '/' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    title: 'Carbon Design System',
    titleInternal: 'IBM Product Design',
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        root: __dirname,
        defaultLayouts: {
          default: require.resolve('./src/components/Layouts/index.js'),
        },
        globalScope: `
        import AnchorLinks from '${__dirname}/src/components/AnchorLinks';
        import ClickableTile from '${__dirname}/src/components/ClickableTile';
        import FeatureTile from '${__dirname}/src/components/FeatureTile';
        import GridWrapper from '${__dirname}/src/components/GridWrapper';
        import DoDontExample from '${__dirname}/src/components/DoDontExample';
        import ComponentCode from '${__dirname}/src/components/ComponentCode';
        import ComponentReact from '${__dirname}/src/components/ComponentReact';
        import ComponentDocs from '${__dirname}/src/components/ComponentDocs';
        import ImageComponent from '${__dirname}/src/components/ImageComponent';
        import ColorBlock from '${__dirname}/src/components/ColorBlock';

        export default {
          AnchorLinks,
          ClickableTile,
          FeatureTile,
          GridWrapper,
          DoDontExample,
          ImageComponent,
          ComponentDocs,
          ComponentCode,
          ComponentReact,
          ColorBlock
        };
      `,
        gatsbyRemarkPlugins: [
          /* { resolve: 'gatsby-remark-unwrap-images' },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
            },
          }, */
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 1024,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77  // height: 333, 1584Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
          { resolve: 'gatsby-remark-copy-linked-files' },
          { resolve: 'gatsby-remark-smartypants' },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131128838-1',
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
          `gatsby-plugin-catch-links`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-component`,
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 1024,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77  // height: 333, 1584Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1120,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
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
