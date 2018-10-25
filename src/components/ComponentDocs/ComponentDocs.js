import React from 'react';
import PropTypes from 'prop-types';

export default class ComponentDocs extends React.Component {
  static propTypes = {
    component: PropTypes.string,
  };

  render() {
    const { component } = this.props;

    let componentDocUrl = '';
    // Loading README.md causes Storybook build failure as of now
    componentDocUrl = require(`carbon-components/src/components/${component}/README.md`);

    return (
      <div className="page_md component-docs">
        <h2 className="page-h2">Documentation</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: componentDocUrl,
          }}
        />
      </div>
    );
  }
}
