const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');

// Method that creates nodes based on the file system that we can use in our templates
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  let tabs = [];
  if (node.internal.type === 'Directory' && node.base === 'content') {
    const dir = path.resolve(__dirname, '');
    const mainCategories = fs.readdirSync(node.absolutePath);
    let mdFiles;
    mainCategories.forEach(folder => {
      const subCategories = fs.readdirSync(`${dir}/src/content/${folder}`);
      subCategories.forEach(subFolder => {
        mdFiles = fs.readdirSync(`${dir}/src/content/${folder}/${subFolder}`).filter(file => file.indexOf('md') >= 0);
        if (mdFiles.length > 1) {
          mdFiles.forEach(file => {
            tabs.push(file.slice(0, -3));
          });
        }
      });
    });
  }

  // If the node type (file) is a markdown file
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = createFilePath({ node, getNode, basePath: `content`, trailingSlash: false });
    const currentPage = slug.split('/').pop();

    const parentFolder = fileNode.relativeDirectory;
    console.log(parentFolder);

    // example: /getting-started/developers/react
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
                currentPage
              }
              frontmatter {
                title
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
        const currentPath = slug.slice(0, slug.lastIndexOf(currentPage));
        if (node.frontmatter.tabs === null) {
          createPage({
            path: currentPath,
            component: path.resolve(`./src/templates/page.js`),
            context: {
              slug,
              currentPage,
            },
          });
        } else {
          const current = node.frontmatter.tabs
            .split(',')[0]
            .toLowerCase()
            .trim();
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
      });
      resolve();
    });
  });
};
