const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
let prevDir;
let prevNode;
const fs = require('fs');

const grabTabs = fileNode => {
  return new Promise((resolve, reject) => {
    const tabs = fs.readdirSync(fileNode.dir).filter(file => fs.statSync(path.join(`${fileNode.dir}`, file)).isFile());
    const tabsText = tabs.toString();
    resolve(tabsText);
  });
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const dir = path.resolve(__dirname, '..');
    const fileNode = getNode(node.parent);
    grabTabs(fileNode).then(tabsText => {
      if (typeof tabsText === 'string') {
        const slug = createFilePath({ node, getNode, basePath: `content`, trailingSlash: false });
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
          name: `tabs`,
          value: tabsText,
        });
        createNodeField({
          node,
          name: `currentTab`,
          value: fileNode.name,
        });
      }
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
                tabs
                currentTab
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
        const tabs = node.fields.tabs;
        const current = node.fields.currentTab;
        const currentTab = slug.split('/').pop();
        let currentPath = currentTab === tab ? slug.slice(0, slug.lastIndexOf(tab)) : slug;
        createPage({
          path: currentPath,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug,
            tab,
            tabs,
            current,
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
