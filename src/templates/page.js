import '../polyfills';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layouts';
import FourOhFour from '../components/404';

// Components
import PageHeader from '../components/PageHeader';
import PageTabs from '../components/PageTabs';
import NextPrevious from '../components/NextPrevious';
import BackToTop from '../components/BackToTop';
import {
  HomepageFooter,
  HomepageHeader,
} from '../components/Homepage/Homepage';

export default ({ data }) => {
  const post = data.mdx;
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
            <MDXRenderer scope={this.props.__mdxScope}>
              {post.code.body}
            </MDXRenderer>
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
          <MDXRenderer scope={this.props.__mdxScope}>
            {post.code.body}
          </MDXRenderer>
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
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
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
