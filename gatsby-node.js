const path = require('path');
const paths = require('./paths');
const { createFilePath } = require(`gatsby-source-filesystem`);
const publicPath = '/';

// Method that creates nodes based on the file system that we can use in our templates
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // If the node type (file) is a markdown file
  if (node.internal.type === 'MarkdownRemark') {
    const dir = path.resolve(__dirname, '');
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: `content`, trailingSlash: false });
    const currentPage = slug.split('/').pop();

    // example
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // example: react
    createNodeField({
      node,
      name: `currentPage`,
      value: currentPage,
    });
  }
};

// Method that creates the pages for our website
exports.createPages = ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                currentPage
              }
              frontmatter {
                tabs
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        const currentPage = node.fields.currentPage;
        const tabs = node.frontmatter.tabs === null ? [] : node.frontmatter.tabs;
        let currentPath = node.frontmatter.tabs === null ? slug.slice(0, slug.lastIndexOf(currentPage)) : slug;
        createPage({
          path: currentPath,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug,
            currentPage,
          },
        });
        if (tabs.length > 1) {
          const current = tabs[0].toLowerCase().replace(' ', '-');
          currentPath = currentPath.slice(0, currentPath.lastIndexOf(current));
          createRedirect({
            fromPath: `${currentPath}`,
            redirectInBrowser: true,
            toPath: `${currentPath}${current}`,
          });
          createRedirect({
            fromPath: `${currentPath.slice(0, currentPath.length - 1)}`,
            redirectInBrowser: true,
            toPath: `${currentPath}${current}`,
          });
        }
        resolve();
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig();
  const { entry, module } = config;
  const { rules } = module;
  const { commons } = entry || {};
  const appIndex = !commons ? -1 : commons.findIndex(item => /app$/i.test(item));
  actions.replaceWebpackConfig({
    ...config,
    entry: stage !== 'develop' || appIndex < 0 ? entry : {
      ...entry,
      commons: [
        // Ensure loading polyfills before RHL loads `react` module
        // This prevents a condition where `Symbol` polyfill loaded
        // after `react` is loaded and before `react-dom` is loaded
        // which makes `react` and `react-dom` refer to different `Symbol` definitions.
        //
        // Refs:
        // https://github.com/gatsbyjs/gatsby/issues/7003
        // https://github.com/facebook/react/issues/8379#issuecomment-263962787
        //
        // The problem seems to happen only in development environment (see below link)
        // and thus we patch `entry` WebPack config only for development environment.
        // https://github.com/carbon-design-system/carbon-website-gatsby/issues/24#issuecomment-421593414
        path.resolve(__dirname, 'src/polyfills/index.js'),
        ...commons,
      ],
    },
    module: {
      ...module,
      rules: [
        ...rules.map(item => {
          const { use } = item;
          if (!use || use.every(({ loader }) => !/babel-loader\.js$/i.test(loader))) {
            return item;
          }
          return {
            ...item,
            exclude: /(node_modules|bower-components)[\/\\](?!(ansi-regex)[\/\\]).*/,
          };
        }),
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  });
};
