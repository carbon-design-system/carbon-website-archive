import React from 'react';
import rehypeReact from 'rehype-react';

// Components
import PageHeader from '../components/global/PageHeader';
import PageTabs from '../components/global/PageTabs';
import PageContent from '../components/global/PageContent';
import Snippet from '../components/global/CodeSnippet';

// Custom Markdown
import { h2, h3, PageIntro } from '../components/markdown/Markdown';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: h2,
    h3: h3,
    pre: Snippet,
    'page-intro': PageIntro,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  let tabs = post.fields.tabs;
  let currentTab = post.fields.currentTab;
  let slug = post.fields.slug;
  let newTabs = [];
  if (tabs.length > 1) {
    tabs = tabs.split(',');
    tabs.forEach(tab => {
      newTabs.push(tab.slice(0, -3));
    });
  }
  return (
    <div>
      <PageHeader title={post.frontmatter.title} label={post.frontmatter.label} />
      {newTabs.length > 1 && <PageTabs slug={slug} currentTab={currentTab} tabs={newTabs} />}
      <PageContent>{renderAst(post.htmlAst)}</PageContent>
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
        currentTab
      }
      frontmatter {
        title
        label
        mainTab
      }
    }
  }
`;
