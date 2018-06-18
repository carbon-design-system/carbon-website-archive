const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const tab = createFilePath({ node, getNode, basePath: `content`, trailingSlash: false });
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
      value: tab,
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
              }
              frontmatter {
                mainTab
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        const tab = node.fields.tab;
        const currentTab = slug.split('/').pop();
        let currentPath = currentTab === tab ? slug.slice(0, slug.lastIndexOf(tab)) : slug;
        createPage({
          path: currentPath,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug,
          },
        });
        if (!(currentTab === tab) && node.frontmatter.mainTab === true) {
          const originalPath = slug.slice(0, slug.indexOf(currentTab));
          createRedirect({
            fromPath: `${originalPath}`,
            redirectInBrowser: true,
            toPath: `${originalPath}${currentTab}`,
          });
          createRedirect({
            fromPath: `${slug.slice(0, slug.indexOf(currentTab) - 1)}`,
            redirectInBrowser: true,
            toPath: `${originalPath}${currentTab}`,
          });
        }
      });
      resolve();
    });
  });
};
