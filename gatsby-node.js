const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const dir = path.resolve(__dirname, '..');
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: `content`, trailingSlash: false });
    const currentTab = slug.split('/').pop();
    const currentDirArr = fileNode.relativeDirectory.split('/');
    const currentDir = currentDirArr[currentDirArr.length - 1];
    createNodeField({
      node,
      name: `tab`,
      value: currentDir,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `current`,
      value: currentTab,
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createRedirect, createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                tab
                current
              }
              frontmatter {
                tabs
                taborder
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        const tab = node.fields.tab;
        const current = node.fields.current;
        let currentPath = current === tab ? slug.slice(0, slug.lastIndexOf(tab)) : slug;
        createPage({
          path: currentPath,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug,
            tab,
            current,
          },
        });
        if (!(current === tab) && node.frontmatter.taborder === 1) {
          const originalPath = slug.slice(0, slug.indexOf(current));
          createRedirect({
            fromPath: `${originalPath}`,
            redirectInBrowser: true,
            toPath: `${originalPath}${current}`,
          });
          createRedirect({
            fromPath: `${slug.slice(0, slug.indexOf(current) - 1)}`,
            redirectInBrowser: true,
            toPath: `${originalPath}${current}`,
          });
        }
      });
      resolve();
    });
  });
};
