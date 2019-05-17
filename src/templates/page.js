import '../polyfills';
import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../components/Layouts';
import EditLink from '../components/EditLink';

import { FourOhFour, WebsiteBackToTopBtn } from '@carbon/addons-website';

// Components
import PageHeader from '../components/PageHeader';
import PageTabs from '../components/PageTabs';
import NextPrevious from '../components/NextPrevious';

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
  const isInternal = GATSBY_CARBON_ENV !== 'internal' && internal === true;
  const homepage = (post.frontmatter.title === 'Homepage') === true;

  if (isInternal) {
    return (
      <Layout>
        <FourOhFour />
      </Layout>
    );
  } else if (homepage) {
    if (typeof document !== 'undefined') {
      document.body.style.background = '#282828';
    }

    return (
      <Layout>
        <div className="container--homepage">
          <HomepageHeader />
          <main className="page-content bx--grid" id="maincontent">
            <div className="wrapper">
              <MDXRenderer>{post.code.body}</MDXRenderer>
            </div>
          </main>
          <HomepageFooter />
        </div>
        <WebsiteBackToTopBtn />
      </Layout>
    );
  } else {
    if (typeof document !== 'undefined') {
      document.body.style.background = '#f3f3f3';
    }

    return (
      <Layout>
        <PageHeader
          title={post.frontmatter.title}
          label={post.frontmatter.label}
          pageTabs={
            !(tabs === null) && (
              <PageTabs slug={slug} currentTab={currentPage} tabs={tabs} />
            )
          }
        />
        <main className="page-content bx--grid" id="maincontent">
          <div className="wrapper">
            <MDXRenderer>{post.code.body}</MDXRenderer>
          </div>
          <EditLink slug={slug} />
        </main>
        <NextPrevious
          slug={slug}
          currentTabs={tabs}
          currentPage={currentPage}
        />
        <WebsiteBackToTopBtn />
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
