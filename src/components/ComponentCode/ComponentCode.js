import React from 'react';
import PropTypes from 'prop-types';

import ComponentExample from '../ComponentExample/ComponentExample';

export default class ComponentCode extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    codepen: PropTypes.string,
    background: PropTypes.string,
    haslightversion: PropTypes.string,
    hasreactversion: PropTypes.string,
    hasangularversion: PropTypes.string,
    haslightbackground: PropTypes.string,
    experimental: PropTypes.string,
  };

  render() {
    const {
      component,
      name,
      codepen,
      haslightbackground,
      haslightversion,
      hasreactversion,
      hasangularversion,
      variation,
      experimental,
    } = this.props;

    let htmlFile;
    if (experimental) {
      try {
        htmlFile = require(`../../html/${component}/${variation}.html`);
      } catch (err) {}
    }
    if (!htmlFile) {
     htmlFile = require(`carbon-components/html/${component}/${variation}.html`);
    }

    return (
      <div className="component-variation">
        <h2 className="page-h2">{name}</h2>
        <ComponentExample
          codepenSlug={codepen}
          component={component}
          variation={variation}
          htmlFile={htmlFile}
          hideViewFullRender={this.props.hideViewFullRender}
          hasLightVersion={haslightversion}
          hasReactVersion={hasreactversion}
          hasAngularVersion={hasangularversion}
          hasLightBackground={haslightbackground}
          experimental={experimental}
        />
      </div>
    );
  }
}

