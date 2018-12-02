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
<<<<<<< HEAD
      <div className="component-variation bx--row">
        <div class="ibm--col-lg-12 ibm--offset-lg-4">
=======
      <div className="component-variation ibm--row">
        <div className="ibm--col-lg-12 ibm--offset-lg-4">
>>>>>>> v10
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
      </div>
    );
  }
}

