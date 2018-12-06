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
import IconLibraryExperimental from '../components/IconLibrary/IconLibraryExperimental';
import TypeScaleTable from '../components/TypeScaleTable';
import TypeWeight from '../components/TypeWeight';
import ComponentCode from '../components/ComponentCode';
import ComponentDocs from '../components/ComponentDocs';
import ComponentStatus from '../components/ComponentStatus';
import ComponentReact from '../components/ComponentReact';
import Glossary from '../components/Glossary';
import MotionExample from '../components/MotionExample';
import LayerTypes from '../components/LayerTypes';
import LayerUsage from '../components/LayerUsage';
import ComponentOverview from '../components/ComponentOverview';
import GridWrapper from '../components/GridWrapper';
import { HomepageFooter, HomepageHeader } from '../components/Homepage/Homepage';

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
  PageIntro,
  PageIcon,
  FlexGroup,
  DoDontGroup,
} from '../components/markdown/Markdown';

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
    'page-intro': PageIntro,
    icon: PageIcon,
    'flex-group': FlexGroup,
    'do-dont-group': DoDontGroup,
    'clickable-tile': ClickTile,
    'feature-tile': FeatureTile,
    'do-dont-example': DoDontExample,
    'color-block': ColorBlock,
    'color-card': ColorCard,
    'icon-library': IconLibrary,
    'icon-library-experimental': IconLibraryExperimental,
    'type-scale-table': TypeScaleTable,
    'type-weight': TypeWeight,
    component: ComponentCode,
    'component-react': ComponentReact,
    'component-docs': ComponentDocs,
    'component-status': ComponentStatus,
    glossary: Glossary,
    'motion-example': MotionExample,
    'layer-types': LayerTypes,
    'layer-usage': LayerUsage,
    'component-overview': ComponentOverview
  },
}).Compiler;

export default ({ data, pageContent }) => {
  const post = data.markdownRemark;
  let currentPage = post.fields.currentPage;
  let slug = post.fields.slug;
  let tabs = post.frontmatter.tabs;
  let internal = post.frontmatter.internal;

  const { GATSBY_CARBON_ENV } = process.env;
  const isInternal = GATSBY_CARBON_ENV !== 'internal' && internal == true;
  const homepage = (post.frontmatter.title === 'Homepage') == true;

  const classNames = classnames({
    'container--component': post.frontmatter.label === 'Components',
  });

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
          <div className="page-content ibm--grid ibm--grid--padding">
            {renderAst(post.htmlAst)}
          </div>
          <HomepageFooter />
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={classNames}>
          <PageHeader
            title={post.frontmatter.title}
            label={post.frontmatter.label}>
            {!(tabs === null) && (
              <PageTabs slug={slug} currentTab={currentPage} tabs={tabs} />
            )}
          </PageHeader>
          <div className="page-content ibm--grid">
            {renderAst(post.htmlAst)}
          </div>
        </div>
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
