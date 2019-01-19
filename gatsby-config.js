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
        //extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/components/Layouts/index.js'),
        },
        /*    globalScope: `
          import { Button } from 'carbon-components-react';
          export default { Button };
          import FeatureTile from '${__dirname}/src/components/FeatureTile';
          import ClickableTile from '${__dirname}/src/components/ClickableTile';
          import GridWrapper from '${__dirname}/src/components/GridWrapper';
        `, */
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
