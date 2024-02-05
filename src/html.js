import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    const script = `
    if(!window) window = {};
    window.idaPageIsSPA = false;
    window.digitalData = {
      page: {
        category: {
          primaryCategory: 'DESIGN',
        },
        pageInfo: {
          ibm: {
            siteID: 'CARBON_DESIGN_SYSTEM_WWW_v9',
            country: 'US',
            industry: 'Design',
            owner: 'carbon@us.ibm.com',
          },
        },
      },
    }`;
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <script src="https://cdn.jsdelivr.net/npm/docsearch.js@2.6.2/dist/cdn/docsearch.min.js" />

          <script
            key="digital-data"
            dangerouslySetInnerHTML={{ __html: script }}
          />
          <script
            defer
            key="core-metrics"
            src="https://1.www.s81c.com/common/stats/ibm-common.js"
            type="text/javascript"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
