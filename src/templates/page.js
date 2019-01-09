import '../polyfills';
import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/Layouts';
import FourOhFour from '../components/404';
import classnames from 'classnames';

// Components
import PageHeader from '../components/PageHeader';
import PageTabs from '../components/PageTabs';
import Snippet from '../components/CodeSnippet';
import PageTable from '../components/PageTable';
import ClickTile from '../components/ClickableTile';
import FeatureTile from '../components/FeatureTile';
import DoDontExample from '../components/DoDontExample';
import ColorBlock from '../components/ColorBlock';
import ColorCard from '../components/ColorCard';
import IconLibrary from '../components/IconLibrary';
import TypeScaleTable from '../components/TypeScaleTable';
import TypeWeight from '../components/TypeWeight';
import TypeSpec from '../components/TypeSpec';
import ComponentCode from '../components/ComponentCode';
import ComponentDocs from '../components/ComponentDocs';
import ComponentStatus from '../components/ComponentStatus';
import ComponentReact from '../components/ComponentReact';
import Glossary from '../components/Glossary';
import ComponentOverview from '../components/ComponentOverview';
import NextPrevious from '../components/NextPrevious';
import GridWrapper from '../components/GridWrapper';
import BackToTop from '../components/BackToTop';
import {
  HomepageFooter,
  HomepageHeader,
} from '../components/Homepage/Homepage';
import { Tabs } from 'carbon-components-react';
import { Tab } from 'carbon-components-react';

// Custom Markdown
import {
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  ul,
  ol,
  PageIcon,
  AnchorLinks,
} from '../components/markdown/Markdown';

function createElementCustom(component, props, children) {
  const Tag =
    (components && component && components[component]) || // Get component from map if present
    component || // Otherwise just the string
    'div'; // Default to div

  // And return the formed component
  return (
    <Tag {...props}>
      {children}
    </Tag>
  );
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: p,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    ul: ul,
    ol: ol,
    pre: Snippet,
    table: PageTable,
    'grid-wrapper': GridWrapper,
    icon: PageIcon,
    'clickable-tile': ClickTile,
    'feature-tile': FeatureTile,
    'do-dont-example': DoDontExample,
    'color-block': ColorBlock,
    'color-card': ColorCard,
    'icon-library': IconLibrary,
    'type-scale-table': TypeScaleTable,
    'type-weight': TypeWeight,
    'type-spec': TypeSpec,
    component: ComponentCode,
    'component-react': ComponentReact,
    'component-docs': ComponentDocs,
    'component-status': ComponentStatus,
    glossary: Glossary,
    'component-overview': ComponentOverview,
    'anchor-links': AnchorLinks,
    tabs: Tabs,
    tab: Tab,
  },
}).Compiler;

export default ({ data }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;
  let tabs = post.frontmatter.tabs;
  let internal = post.frontmatter.internal;

  const { GATSBY_CARBON_ENV } = process.env;
  const isInternal = GATSBY_CARBON_ENV !== 'internal' && internal == true;
  const homepage = (post.frontmatter.title === 'Homepage') == true;

  if (isInternal) {
    return (
      <Layout>
        <FourOhFour />
      </Layout>
    );
  } else if (homepage) {
    return (
      <Layout>
        <div className="container--homepage">
          <HomepageHeader />
          <main className="page-content ibm--grid" id="maincontent">
            {renderAst(post.htmlAst)}
          </main>
          <HomepageFooter />
        </div>
        <BackToTop />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <PageHeader
          title={post.frontmatter.title}
          label={post.frontmatter.label}>
          {!(tabs === null) && (
            <PageTabs slug={slug} currentTab={currentPage} tabs={tabs} />
          )}
        </PageHeader>
        <main className="page-content ibm--grid" id="maincontent">
          {renderAst(post.htmlAst)}
        </main>
        <NextPrevious
          slug={slug}
          currentTabs={tabs}
          currentPage={currentPage}
        />
        <BackToTop />
      </Layout>
    );
  }
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
        internal
      }
    }
  }
`;
