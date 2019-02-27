import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';

import ComponentExample from '../ComponentExample/ComponentExample';
import ComponentReactExample from '../ComponentReactExample/ComponentReactExample';

class CodePage extends Component {
  static propTypes = {
    component: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
  };

  renderVariation = (parent, variation, variations, title, codepenSlug) => {
    let currentCodepenSlug = '';
    if (!(codepenSlug === undefined)) {
      if (typeof codepenSlug === 'string') {
        currentCodepenSlug = codepenSlug;
      } else {
        Object.keys(codepenSlug).map(slug => {
          if (variation === slug) {
            currentCodepenSlug = codepenSlug[slug][0];
          }
        });
      }
    }
    let htmlFile;
    if (parent === 'dropdown') {
      if (/^dropdown/.test(variation)) {
        htmlFile = require(`carbon-components/html/${parent}/${variation}.html`);
      } else {
        return this.renderReactComponent(parent, variation, title);
      }
    } else {
      if (parent === 'text-input' && variation === 'text-area') {
        htmlFile = require('carbon-components/html/text-area/text-area.html');
      } else if (parent === 'data-table' && variation === 'toolbar') {
        htmlFile = require('carbon-components/html/toolbar/toolbar.html');
      } else if (parent === 'date-picker' && variation === 'time-picker') {
        htmlFile = require('carbon-components/html/time-picker/time-picker.html');
      } else if (parent === 'data-table' && variation === 'data-table-v2') {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--expandable'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--expandable.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--pagination'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--with-pager.html');
      } else if (
        parent === 'data-table' &&
        variation === 'data-table-v2--small'
      ) {
        htmlFile = require('carbon-components/html/data-table-v2/data-table-v2--small.html');
      } else {
        htmlFile = require(`carbon-components/html/${parent}/${variation}.html`);
      }
    }

    if (variation.includes('light') || variation.includes('legacy')) {
      return '';
    }

    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <ComponentExample
          codepenSlug={currentCodepenSlug}
          variation={variation}
          component={parent}
          htmlFile={htmlFile}
          variations={variations}
          hideViewFullRender={this.props.hideViewFullRender}
        />
      </div>
    );
  };

  renderReactComponent = (parent, variation, title) => {
    return (
      <div key={variation} className="component-variation">
        <h2 className="component-variation__name">{title}</h2>
        <p>
          This component is currently only available in{' '}
          <a
            href="https://github.com/ibm/carbon-components-react"
            target="_blank">
            our React library
          </a>
          .
        </p>
        <ComponentReactExample component={parent} variation={variation} />
      </div>
    );
  };

  renderJavascriptContent = component => {
    let javascriptSection;
    try {
      if (component === 'data-table') {
        javascriptSection = require('carbon-components/src/components/data-table-v2/README.md');
      } else {
        javascriptSection = require(`carbon-components/src/components/${component}/README.md`);
      }
    } catch (e) {
      javascriptSection = '';
    }
    return javascriptSection;
  };

  render() {
    const component = this.props.component;
    let componentInfo = require(`../../../../data/components/${component}.js`); // eslint-disable-line
    const description = componentInfo.desc;
    const md = new Markdown({
      html: true,
    });
    let componentContent;
    let codepenSlug = componentInfo.codepen;
    if (componentInfo.variations) {
      componentContent = Object.keys(componentInfo.variations).map(variation =>
        this.renderVariation(
          component,
          variation,
          componentInfo.variations,
          componentInfo.variations[variation],
          codepenSlug
        )
      );
    } else {
      let htmlFile = require(`carbon-components/html/${component}/${component}.html`);

      componentContent = (
        <ComponentExample
          hideViewFullRender={this.props.hideViewFullRender}
          component={component}
          htmlFile={htmlFile}
          codepenSlug={codepenSlug}
        />
      );
    }
    let javascriptContent;
    if (!(this.renderJavascriptContent(component) === '')) {
      javascriptContent = (
        <div className="page_md component-docs">
          <h2>Documentation</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: md.render(this.renderJavascriptContent(component)),
            }}
          />
        </div>
      );
    } else {
      javascriptContent = '';
    }

    return (
      <div className="page code-page test">
        <p
          className="page__desc"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        {componentContent}
        {javascriptContent}
      </div>
    );
  }
}

export default CodePage;
