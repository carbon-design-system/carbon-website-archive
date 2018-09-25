import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CodeExample from '../CodeExample/CodeExample';
import * as components from 'carbon-components/es/globals/js/components';
import settings from 'carbon-components/es/globals/js/settings';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

const componentNamesMap = {
  Card: ['OverflowMenu'],
  CodeSnippet: ['CodeSnippet', 'CopyButton'],
  DataTable: ['DataTable', 'DataTableV2', 'OverflowMenu', 'Toolbar'],
  DetailPageHeader: ['OverflowMenu', 'Tab'],
  OrderSummary: ['Dropdown'],
  Tabs: ['Tab', 'ContentSwitcher'],
};

class ComponentExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
    hideViewFullRender: PropTypes.bool,
    codepenSlug: PropTypes.string,
    hasLightVersion: PropTypes.string,
    hasReactVersion: PropTypes.string,
    hasAngularVersion: PropTypes.string,
    hasLightBackground: PropTypes.string,
    experimental: PropTypes.string,
  };

  static _initHandles = new WeakMap();

  state = {
    currentFieldColor: 'field-01',
    currentHTMLfile: this.props.htmlFile,
  };

  onSwitchFieldColors = value => {
    this.setState({
      currentFieldColor: value,
    });

    let newHTML;
    let currentComponent = this.props.component;
    const currentVariation = this.props.variation;
    if (
      currentComponent !== currentVariation &&
      !currentVariation.includes(currentComponent)
    ) {
      currentComponent = currentVariation;
    }
    if (value === 'field-02') {
      if (
        currentVariation.includes('--') ||
        currentVariation === 'code-snippet--inline'
      ) {
        newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}-light.html`);
      } else {
        newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}--light.html`);
      }
    } else {
      newHTML = require(`carbon-components/html/${currentComponent}/${currentVariation}.html`);
    }
    this.setState({
      currentHTMLfile: newHTML,
    });
  };

  _ref = null;

  _instances = [];

  _liveDemoRef = ref => {
    this._ref = ref;
    this._releaseAndInstantiateComponents();
  };

  componentDidUpdate({ htmlFile }) {
    const { prevHtmlFile } = this.props;
    if (prevHtmlFile !== htmlFile) {
      this._releaseAndInstantiateComponents();
    }
  }

  _releaseAndInstantiateComponents() {
    const instances = this._instances;
    for (let instance = instances.pop(); instance; instance = instances.pop()) {
      instance.release();
    }
    const ref = this._ref;
    if (ref) {
      const { component, experimental } = this.props;
      const currentComponent = component
        .replace(/-([a-z])/g, (match, token) => token.toUpperCase())
        .replace(/^([a-z])/, (match, token) => token.toUpperCase());
      // TODO: See if instances with different prefixes may exist as the same time.
      // If so, we need to figure out more sophisticted approach here.
      settings.prefix = experimental ? 'demo' : 'bx';
      (componentNamesMap[currentComponent] || [currentComponent]).forEach(
        name => {
          const TheComponent = components[name];
          if (TheComponent) {
            if (TheComponent.prototype.createdByLauncher) {
              const initHandles = this.constructor._initHandles;
              if (!initHandles.has(TheComponent)) {
                initHandles.set(TheComponent, TheComponent.init());
              }
            } else {
              const selectorInit = TheComponent.options.selectorInit;
              // Gatsby's setup seems to use `.concat()` for [...arraylike], which does not work for `NodeList`
              instances.push(
                ...Array.from(ref.querySelectorAll(selectorInit)).map(elem =>
                  TheComponent.create(elem)
                )
              );
            }
          }
        }
      );
    }
  }

  componentWillReceiveProps(props) {
    if (this.state.currentHTMLfile !== props.htmlFile) {
      this.setState({ currentHTMLfile: props.htmlFile });
    }
  }

  render() {
    const {
      component,
      codepenSlug,
      hasLightVersion,
      hasReactVersion,
      hasAngularVersion,
      hasLightBackground,
      experimental,
    } = this.props;

    const { currentHTMLfile = '', currentFieldColor } = this.state;
    const demoHtml = !experimental
      ? currentHTMLfile
      : currentHTMLfile.replace(/bx--/g, 'demo--');

    const classNames = classnames({
      'component-example__live--rendered': true,
      [`${component}`]: true,
    });

    const lightUIclassnames = classnames({
      'component-example': true,
      'bx--global-light-ui': component === 'tabs',
    });

    let componentName =
      component
        .replace(/-/g, ' ')
        .charAt(0)
        .toUpperCase() + component.replace(/-/g, ' ').substring(1);

    if (componentName.split(' ').length > 1) {
      componentName = `${componentName.split(' ')[0]} ${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }

    let componentNameLink = componentName;
    if (componentName.split(' ').length > 1) {
      componentNameLink = `${componentName.split(' ')[0]}${componentName
        .split(' ')[1]
        .charAt(0)
        .toUpperCase() + componentName.split(' ')[1].substring(1)}`;
    }

    const liveBackgroundClasses = classnames('component-example__live', {
      'component-example__live--light':
        (currentFieldColor === 'field-01') & (hasLightVersion === 'true') ||
        hasLightBackground === 'true',
      'carbon-demo-experimental': experimental === 'true',
    });

    const componentLink = `https://codepen.io/team/carbon/full/${codepenSlug}/`;
    const counter = Math.floor(Math.random() * 100) + 1;

    return (
      <div className={lightUIclassnames}>
        <div className={liveBackgroundClasses}>
          <div className={classNames}>
            <div
              ref={this._liveDemoRef}
              dangerouslySetInnerHTML={{ __html: demoHtml }}
            />
          </div>
        </div>
        <div className="component-toolbar">
          <div className="component-toolbar__current">
            <p>Vanilla JS</p>
          </div>
          <div className="component-toolbar__links">
            {hasReactVersion === 'true' && (
              <a
                href={`http://react.carbondesignsystem.com/?selectedKind=${componentNameLink}`}
                target="_blank"
                rel="noopener noreferrer">
                React
              </a>
            )}
            {hasAngularVersion === 'true' && (
              <a
                href={`http://angular.carbondesignsystem.com/?selectedKind=${componentNameLink}`}
                target="_blank"
                rel="noopener noreferrer">
                Angular
              </a>
            )}
            {codepenSlug !== undefined && (
              <a target="_blank" href={componentLink} rel="noopener noreferrer">
                CodePen
              </a>
            )}
          </div>
          {hasLightVersion === 'true' && (
            <div className="component-toolbar__switcher">
              <RadioButtonGroup
                defaultSelected={currentFieldColor}
                name={`radio-button-group-${counter}`}
                legend="Field selector"
                onChange={this.onSwitchFieldColors}>
                <RadioButton
                  value="field-01"
                  id={`field-01-${counter}`}
                  labelText="field-01"
                />
                <RadioButton
                  value="field-02"
                  id={`field-02-${counter}`}
                  labelText="field-02"
                />
              </RadioButtonGroup>
            </div>
          )}
        </div>
        <CodeExample htmlFile={currentHTMLfile} />
      </div>
    );
  }
}

export default ComponentExample;
