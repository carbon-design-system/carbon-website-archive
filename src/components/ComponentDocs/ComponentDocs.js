import React from 'react';
import PropTypes from 'prop-types';

export default class ComponentDocs extends React.Component {
  static propTypes = {
    component: PropTypes.string,
    experimental: PropTypes.string,
  };

  render() {
    const { component, experimental } = this.props;

    let componentDocUrl = '';
    if (experimental === true) {
      try {
        componentDocUrl = require(`carbon-components/src/components/${component}/experimental.md`);
      } catch (err) {} // eslint-disable-line no-empty
    }
    if (!componentDocUrl) {
      componentDocUrl = require(`carbon-components/src/components/${component}/README.md`);
    }

    return (
      <div className="page_md component-docs bx--row">
        <div className="bx--col-lg-12 bx--offset-lg-4">
          <h2 className="page-h2">Documentation</h2>
          {
            <div
              dangerouslySetInnerHTML={{
                __html: componentDocUrl,
              }}
            />
          }
        </div>
      </div>
    );
  }
}
