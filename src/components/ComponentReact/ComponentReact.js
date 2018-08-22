import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router';
//import ReactDOM from 'react-dom';
//import classnames from 'classnames';
//import { MultiSelect } from 'carbon-components-react';

class ComponentReact extends Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.string,
    variation: PropTypes.string,
  };


  render() {
    const { name, component } = this.props;
    const componentLink = `http://react.carbondesignsystem.com/?selectedKind=${component}&selectedStory=${component}`;
    return (
      <div className="component-variation">
        <h2 className="page-h2">{name}</h2>
        <p>This component is currently only available in <a href="https://github.com/ibm/carbon-components-react" target="_blank" without rel="noopener noreferrer">our React library</a>.</p>
        <div className="component-example__live component-example__live--light">
         
          <a className="component-example__view-full-render" target="_blank" href={componentLink} without rel="noopener noreferrer">
            View on React Storybook
          </a>
        </div>
      </div>
    );
  }
}

export default ComponentReact;

