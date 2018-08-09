import React from 'react';
import rehypeReact from 'rehype-react';

// Components
import PageHeader from '../components/global/PageHeader';
import PageTabs from '../components/global/PageTabs';
import PageContent from '../components/global/PageContent';
import Snippet from '../components/global/CodeSnippet';
import PageTable from '../components/global/PageTable';
import ClickTile from '../components/global/ClickableTile';
import Example from '../components/global/Example';
import ColorCard from '../components/global/ColorCard';
import IconLibrary from '../components/iconography/IconLibrary';

// Custom Markdown
import { h2, h3, h4, ul, ol, PageIntro, PageIcon, FlexGroup, ColorBlock } from '../components/markdown/Markdown';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h2: h2,
    h3: h3,
    h4: h4,
    ul: ul,
    ol: ol,
    pre: Snippet,
    table: PageTable,
    'page-intro': PageIntro,
    'icon': PageIcon,
    'flex-group': FlexGroup,
    'clickable-tile': ClickTile,
    'example': Example,
    'color-block': ColorBlock,
    'color-card': ColorCard,
    'icon-library': IconLibrary,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;
  let tabs = post.frontmatter.tabs;
  return (
    <div>
      <PageHeader title={post.frontmatter.title} label={post.frontmatter.label} />
      {!(tabs === null) && <PageTabs slug={slug} currentTab={currentPage} tabs={tabs} />}
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
        currentPage
      }
      frontmatter {
        title
        label
        tabs
      }
    }
  }
`;
