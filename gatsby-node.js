const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { copy } = require('fs-extra');

// Method that creates nodes based on the file system that we can use in our templates
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // If the node type (file) is a markdown file
  if (node.internal.type === 'MarkdownRemark') {
    const dir = path.resolve(__dirname, '');
    const fileNode = getNode(node.parent);
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
      trailingSlash: false,
    });
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

  return graphql(`
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
      const tabs =
        node.frontmatter.tabs === null ? [] : node.frontmatter.tabs;
      let currentPath =
        node.frontmatter.tabs === null
          ? slug.slice(0, slug.lastIndexOf(currentPage))
          : slug;
      createPage({
        path: currentPath,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug,
          currentPage,
        },
      });
      if (tabs.length > 1) {
        const current = tabs[0].toLowerCase().split(' ').join('-');
        const lastIndex = currentPath.lastIndexOf(current);
        if (lastIndex >= 0) {
          currentPath = currentPath.slice(0, currentPath.lastIndexOf(current));
          createPage({
            path: currentPath,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug,
              currentPage: `${currentPath}${current}`,
            },
          });
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
      }
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig();
  const { module } = config;
  const { rules } = module;
  actions.replaceWebpackConfig({
    ...config,
    module: {
      ...module,
      rules: [
        ...rules.map(item => {
          const { use } = item;
          if (
            !use ||
            use.every(({ loader }) => !/babel-loader\.js$/i.test(loader))
          ) {
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

exports.onPostBuild = () => {
  let src;
  try {
    src = path.resolve(path.dirname(require.resolve('carbon-icons')), 'svg');
  } catch (err) {
    console.error('Error locating the icons directory', err.stack);
    return;
  }
  const dst = path.resolve(__dirname, 'public/assets/icons');
  return copy(src, dst);
};
