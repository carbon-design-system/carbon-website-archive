import React from 'react';
import rehypeReact from 'rehype-react';

// Components
import PageHeader from '../components/global/PageHeader';

// Custom Markdown
import { h2, h3, PageIntro } from '../components/markdown/Markdown';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: h2,
    h3: h3,
    'page-intro': PageIntro,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  const hasTabs = post.fields.tabs.length > 0;
  console.log(post.fields);
  console.log(hasTabs);
  return (
    <div>
      <PageHeader title={post.frontmatter.title} label={post.frontmatter.label} />
      {renderAst(post.htmlAst)}
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
        tab
        tabs
      }
      frontmatter {
        title
        label
        mainTab
      }
    }
  }
`;
